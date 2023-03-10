import { ObservableValue, DistinctValue } from "ergo-hex";

const DEFAULT_IS_EQUAL = () => false;
const NO_OPERATION = () => {};

export interface FieldPresenterOptions<T> {
  onChange?: (value: T) => void;
  onBlur?: (value: T) => void;
  isEqual?: (prev: T, next: T) => boolean;
  validate?: (value: T) => Promise<void> | void;
  shouldValidateOnChange?: boolean;
  shouldValidateOnBlur?: boolean;
  shouldValidateOnLoad?: boolean;
}

export class FieldPresenter<T> {
  protected _label: ObservableValue<string>;
  protected _value: ObservableValue<T, Error>;
  protected _isValueLoading: DistinctValue<boolean>;
  protected _isFocused: DistinctValue<boolean>;
  protected _isEqual: (prev: T, next: T) => boolean;
  protected _validate: (value: T) => Promise<void> | void;
  protected _shouldValidateOnChange: boolean;
  protected _shouldValidateOnBlur: boolean;
  protected _shouldValidateOnLoad: boolean;
  protected _onChange: (value: T) => void;
  protected _onBlur: (value: T) => void;

  get valueBroadcast() {
    return this._value.broadcast;
  }

  get labelBroadcast() {
    return this._label.broadcast;
  }

  get isFocusedBroadcast() {
    return this._isFocused.broadcast;
  }

  get isLoadingBroadcast() {
    return this._isValueLoading.broadcast;
  }

  constructor(label: string, value: T, options: FieldPresenterOptions<T> = {}) {
    this._label = new ObservableValue(label);
    this._value = new ObservableValue(value);
    this._isFocused = new DistinctValue(false);
    this._isValueLoading = new DistinctValue(false);

    this._shouldValidateOnChange =
      typeof options.shouldValidateOnBlur === "boolean"
        ? options.shouldValidateOnBlur
        : false;

    this._shouldValidateOnBlur =
      typeof options.shouldValidateOnBlur === "boolean"
        ? options.shouldValidateOnBlur
        : false;

    this._shouldValidateOnLoad =
      typeof options.shouldValidateOnBlur === "boolean"
        ? options.shouldValidateOnBlur
        : false;

    this._isEqual =
      typeof options.isEqual === "function"
        ? options.isEqual
        : DEFAULT_IS_EQUAL;

    this._onChange =
      typeof options.onChange === "function" ? options.onChange : NO_OPERATION;

    this._onBlur =
      typeof options.onBlur === "function" ? options.onBlur : NO_OPERATION;

    this._validate =
      typeof options.validate === "function" ? options.validate : NO_OPERATION;

    if (this._shouldValidateOnLoad) {
      this._processValidation();
    }
  }

  setValue(value: T) {
    const prev = this._value.getValue();
    const hasChanged = !this._isEqual(prev, value);

    if (hasChanged) {
      this._value.setValue(value);
      this._onChange(value);

      if (this._shouldValidateOnChange) {
        this._processValidation();
      }
    }
  }

  private async _processValidation() {
    try {
      this._validate(this._value.getValue());
      this.clearError();
    } catch (e) {
      this.setError(e);
    }
  }

  setError(error: Error) {
    this._value.setError(error);
  }

  clearError() {
    this._value.setError(null);
  }

  focus() {
    this._isFocused.setValue(true);
  }

  blur() {
    this._isFocused.setValue(false);
    this._onBlur(this._value.getValue());

    if (this._shouldValidateOnBlur) {
      this._processValidation();
    }
  }

  setIsValueLoading(value: boolean) {
    this._isValueLoading.setValue(value);
  }
}
