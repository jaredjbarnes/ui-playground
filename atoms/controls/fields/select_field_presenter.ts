import {
  AsyncActionRunner,
  ObservableValue,
  ReadonlyAsyncActionRunner,
  ReadonlyObservableValue,
} from "ergo-hex";
import { FieldPresenter, FieldPresenterOptions } from "./field_presenter";

export interface SelectFieldPresenterOptions<T>
  extends FieldPresenterOptions<T> {
  getId(value: T): string;
  getLabel(value: T): string;
}

interface Option<T> {
  id: string;
  label: string;
  value: T;
}

export class SelectFieldPresenter<T> extends FieldPresenter<T> {
  protected _getId: (value: T) => string;
  protected _getLabel: (value: T) => string;
  protected _getOptions: () => Promise<T[]>;
  protected _optionsRunner: AsyncActionRunner<Option<T>[]>;
  protected _optionValue: ObservableValue<Option<T>>;

  get optionsRunnerBroadcast(): ReadonlyAsyncActionRunner<Option<T>[]> {
    return this._optionsRunner;
  }

  get optionValueBroadcast(): ReadonlyObservableValue<Option<T>> {
    return this._optionValue;
  }

  constructor(
    label: string,
    value: T,
    options: T[] | Promise<T[]>,
    fieldOptions: SelectFieldPresenterOptions<T>
  ) {
    super(label, value, fieldOptions);
    this._getOptions = this._getOptionsCallback(options);
  }

  private _getOptionsCallback(getOptions: T[] | Promise<T[]>) {
    if (typeof getOptions === "function") {
      return getOptions;
    }

    return () => Promise.resolve(getOptions);
  }

  loadOptions() {
    this._optionsRunner.cancel();
    this._optionsRunner.execute(() => this._makeOptions());
  }

  private _makeOptions() {
    return this._getOptions().then((values) => values.map(this._makeOption));
  }

  private _makeOption = (value: T) => {
    return {
      id: this._getId(value),
      label: this._getLabel(value),
      value,
    };
  };

  setOption(option: Option<T>) {
    this._optionValue.setValue(option);
    this._value.setValue(option.value);
  }

  setValue(value: T) {
    const options = this._optionsRunner.getValue();
    const id = this._getId(value);
    const index = options.findIndex((o) => o.id === id);
    const foundOption = index > -1;

    if (foundOption) {
      const option = options[index];
      this._value.setValue(value);
      this._optionValue.setValue(option);
    }
  }
}
