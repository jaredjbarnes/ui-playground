import { useLayoutEffect, useRef } from "react";

type ResizeHandler = (entry: ResizeObserverEntry) => void;

interface Size {
  width: number;
  height: number;
}

class ResizeObserverRegistry {
  private _resizeObserver: ResizeObserver;
  private _elementHandlers: WeakMap<Element, ResizeHandler[]>;
  private _elementSizes: WeakMap<Element, Size>;

  constructor() {
    this._elementHandlers = new WeakMap();
    this._elementSizes = new WeakMap();

    this._resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const size = this._elementSizes.get(entry.target);
        if (size != null) {
          const newHeight = entry.borderBoxSize[0].blockSize;
          const newWidth = entry.borderBoxSize[0].inlineSize;

          const hasHeightChanged = newHeight !== size.height;
          const hasWidthChanged = newWidth !== size.width;
          const hasSizeChanged = hasHeightChanged || hasWidthChanged;

          const handlers = this._elementHandlers.get(entry.target);

          size.width = newWidth;
          size.height = newHeight;

          if (hasSizeChanged && handlers != null) {
            handlers.forEach((handler) => handler(entry));
          }
        }
      });
    });
  }

  register(element: Element, handler: ResizeHandler) {
    this._elementSizes.set(element, { width: 0, height: 0 });
    this._resizeObserver.observe(element);

    const handlers = this.getElementHandlers(element);
    handlers.push(handler);
  }

  getElementHandlers(element: Element) {
    let handlers = this._elementHandlers.get(element);

    if (handlers == null) {
      handlers = [];
      this._elementHandlers.set(element, handlers);
    }

    return handlers as ResizeHandler[];
  }

  unregister(element: Element) {
    this._elementHandlers.delete(element);
    this._elementSizes.delete(element);
    this._resizeObserver.unobserve(element);
  }
}

const resizeObserverRegistry = new ResizeObserverRegistry();

export function useResizeObserver(resizeHandler: ResizeHandler) {
  const ref = useRef<Element | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element != null) {
      resizeObserverRegistry.register(element, resizeHandler);
    }
  }, [resizeHandler]);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element != null) {
      return () => resizeObserverRegistry.unregister(element);
    }
  }, []);

  return ref;
}
