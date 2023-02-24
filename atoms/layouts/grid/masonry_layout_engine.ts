import { DistinctValue, ObservableValue } from "ergo-hex";

interface Item {
  height: number;
  top: number;
}

export class ItemFactory {
  availableInstances: Item[] = [];
  usedInstances: Item[] = [];

  useInstance() {
    let instance: Item;
    const availableInstances = this.availableInstances;

    if (availableInstances.length === 0) {
      instance = {
        height: 0,
        top: 0,
      };
    } else {
      instance = availableInstances.pop() as Item;
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
  private _minColumnWidth: number;
  private _columnLength: number;
  private _viewportWidth: number;
  private _itemFactory: ItemFactory;
  private _items: Item[];

  constructor() {
    this._gap = 0;
    this._minColumnWidth = 100;
    this._viewportWidth = 0;
    this._itemFactory = new ItemFactory();
  }

  setMinColumnWidth(width: number) {
    width = width <= 0 ? 1 : width;
    this._minColumnWidth = width;
  }

  setLength(length: number) {
    this._updateItems(length);
  }

  private _updateItems(length: number) {
    if (length > this._items.length) {
      const amount = length - this._items.length;

      for (let i = 0; i < amount; i++) {
        this._items.push(this._itemFactory.useInstance());
      }
    } else {
      while (this._items.length > length) {
        const instance = this._items.pop() as Item;
        this._itemFactory.releaseInstance(instance);
      }
    }
  }

  setItemHeight(index: number, height: number) {
    const isWithinBound = index < this._items.length && index > 0;

    if (isWithinBound) {
      this._items[index].height = height;
    }
  }

  setViewportWidth(width: number) {
    this._viewportWidth = width;
  }

  private calculateColumnLength() {
    return Math.floor(this._viewportWidth / this._minColumnWidth);
  }

  reflow() {
    const columnLength = this._columnLength;
    const itemsLength = this._items.length;
    this._columnLength = this.calculateColumnLength();

    for (let column = 0; column < columnLength; column++) {
      let offset = this._gap;

      for (let i = column; i < itemsLength; i += columnLength) {
        const item = this._items[i];
        item.top = offset;
        offset = item.height + this._gap;
      }
    }
  }

  dispose() {
    this._items.length = 0;
    this._itemFactory.releaseAll();
  }
}
