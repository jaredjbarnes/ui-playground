import { ObservableValue, ReadonlyObservableValue } from "ergo-hex";

interface Item {
  top: number;
  height: number;
  column: number;
}

export class ItemFactory {
  availableInstances: Item[] = [];
  usedInstances: Item[] = [];

  useInstance() {
    let instance: Item;
    const availableInstances = this.availableInstances;

    if (availableInstances.length === 0) {
      instance = {
        top: 0,
        column: 0,
        height: 0,
      };
    } else {
      instance = availableInstances.pop() as Item;
      instance.top = 0;
      instance.column = 0;
      instance.height = 0;
    }

    this.usedInstances.push(instance);

    return instance;
  }

  releaseInstance(instance: Item) {
    const index = this.usedInstances.indexOf(instance);
    if (index > -1) {
      this.usedInstances.splice(index, 1);
    }
  }

  releaseAll() {
    const usedInstances = this.usedInstances;
    const length = usedInstances.length;

    for (let x = 0; x < length; x++) {
      this.availableInstances.push(this.usedInstances[x]);
    }

    // Fast way to clear an array.
    this.usedInstances.length = 0;
  }
}

export class MasonryLayoutEngine {
  private _gap: number;
  private _height: number;
  private _minColumnWidth: number;
  private _columnWidth: number;
  private _columnOffsets: number[];
  private _columnLength: number;
  private _viewportWidth: number;
  private _itemFactory: ItemFactory;
  private _items: Item[];
  private _isDirty: ObservableValue<boolean>;

  get isDirtyBroadcast(): ReadonlyObservableValue<boolean> {
    return this._isDirty;
  }

  constructor() {
    this._gap = 0;
    this._minColumnWidth = 100;
    this._columnOffsets = [];
    this._columnWidth = 0;
    this._columnLength = 1;
    this._viewportWidth = 0;
    this._itemFactory = new ItemFactory();
    this._items = [];
    this._isDirty = new ObservableValue(false);
  }

  setMinColumnWidth(width: number) {
    width = width <= 0 ? 1 : width;
    this._minColumnWidth = width;

    this.reflow();
    this._isDirty.setValue(true);
  }

  setLength(length: number) {
    this._updateItems(length);
  }

  setGap(value: number) {
    this._gap = value;
    this.reflow();
  }

  private _updateItems(length: number) {
    const items = this._items;

    if (length > items.length) {
      const amount = length - items.length;

      for (let i = 0; i < amount; i++) {
        items.push(this._itemFactory.useInstance());
      }
    } else {
      while (items.length > length) {
        const instance = items.pop() as Item;
        this._itemFactory.releaseInstance(instance);
      }
    }
    return items;
  }

  setItemHeight(index: number, height: number) {
    const items = this._items;
    const isWithinBound = index < items.length && index >= 0;

    if (isWithinBound) {
      const item = items[index];
      const oldHeight = item.height;
      const hasChanged = oldHeight !== height;

      if (hasChanged) {
        item.height = height;
        this.reflow();
      }
    }
  }

  setViewportWidth(width: number) {
    this._viewportWidth = width;
    this.updateColumnData();
    this.reflow();

    this._isDirty.setValue(true);
  }

  private updateColumnData() {
    this._columnLength = Math.floor(
      (this._viewportWidth - this._gap) / (this._minColumnWidth + this._gap)
    );
    const allGaps = this._columnLength * this._gap + this._gap;
    this._columnWidth = (this._viewportWidth - allGaps) / this._columnLength;
    this._columnOffsets.length = this._columnLength;

    let offset = this._gap;

    for (let i = 0; i < this._columnLength; i++) {
      this._columnOffsets[i] = offset;
      offset += this._columnWidth + this._gap;
    }
  }

  reflow() {
    const items = this._items;
    const columnsVerticalOffset: number[] = [];
    columnsVerticalOffset.length = this._columnLength;
    columnsVerticalOffset.fill(this._gap);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const shortestColumnIndex = this._findSmallestIndex(
        columnsVerticalOffset
      );
      const offset = columnsVerticalOffset[shortestColumnIndex];

      item.top = offset;
      item.column = shortestColumnIndex;

      columnsVerticalOffset[shortestColumnIndex] += item.height + this._gap;
    }

    this._height = Math.max(...columnsVerticalOffset);
    this._isDirty.setValue(true);
  }

  private _findSmallestIndex(array: number[]) {
    let index = 0;
    let currentValue = Infinity;

    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (value < currentValue) {
        index = i;
        currentValue = value;
      }
    }

    return index;
  }

  getLeftOffsetForColumn(columnIndex: number) {
    return this._columnOffsets[columnIndex];
  }

  getColumnWidth() {
    return this._columnWidth;
  }

  getItemByIndex(index: number) {
    return this._items[index];
  }

  getColumnLength() {
    return this._columnLength;
  }

  getHeight() {
    return this._height;
  }

  dispose() {
    this._items.length = 0;
    this._itemFactory.releaseAll();
  }
}
