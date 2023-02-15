import {
  AsyncActionRunner,
  DistinctValue,
  ReadonlyAsyncActionRunner,
  ReadonlyObservableValue,
  WeakPromise,
} from "ergo-hex";

export class ButtonPresenter {
  private _onExecute: () => WeakPromise<void>;
  private _isActive: DistinctValue<boolean>;
  private _isFocused: DistinctValue<boolean>;
  private _isDisabled: DistinctValue<boolean>;
  private _executionRunner: AsyncActionRunner<void>;

  get isDisabledBroadcast(): ReadonlyObservableValue<boolean> {
    return this._isDisabled;
  }

  get isActiveBroadcast(): ReadonlyObservableValue<boolean> {
    return this._isActive;
  }

  get isFocusedBroadcast(): ReadonlyObservableValue<boolean> {
    return this._isFocused;
  }

  get executionRunner(): ReadonlyAsyncActionRunner<void> {
    return this._executionRunner;
  }

  constructor(onExecute: () => WeakPromise<void> | void) {
    this._onExecute = this._convertExecutionCallback(onExecute);
    this._isActive = new DistinctValue(false);
    this._isFocused = new DistinctValue(false);
    this._isDisabled = new DistinctValue(false);
  }

  private _convertExecutionCallback(execute: () => WeakPromise<void> | void) {
    return () => {
      try {
        const result = execute();

        if (result instanceof WeakPromise) {
          return result;
        }

        return WeakPromise.resolve(result);
      } catch (e) {
        return WeakPromise.reject(e);
      }
    };
  }

  disable = () => {
    this._isDisabled.setValue(true);
  };

  enable = () => {
    this._isDisabled.setValue(false);
  };

  activate = () => {
    this._isActive.setValue(true);
  };

  deactivate = () => {
    this._isActive.setValue(false);
  };

  focus = () => {
    this._isFocused.setValue(true);
  };

  blur = () => {
    this._isFocused.setValue(false);
  };

  execute = () => {
    const isDisabled = this._isDisabled.getValue();

    if (isDisabled) {
      return;
    }

    this.disable();
    this._executionRunner.cancel();
    this._executionRunner
      .execute(() => this._onExecute())
      .catch(() => {
        // Do nothing.
      })
      .finally(() => {
        this.enable();
      });
  };
}
