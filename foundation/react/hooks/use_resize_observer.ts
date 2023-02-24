import { useLayoutEffect, useRef } from "react";

type ResizeHandler = (entry: ResizeObserverEntry) => void;

class ResizeObserverRegistry {
  private _resizeObserver: ResizeObserver;
  private _registeredElements: WeakMap<Element, ResizeHandler>;

  constructor() {
    this._resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const handler = this._registeredElements.get(entry.target);

        if (handler != null) {
          handler(entry);
        }
      });
    });

    this._registeredElements = new WeakMap();
  }

  register(element: Element, handler: ResizeHandler) {
    this._registeredElements.set(element, handler);
  }

  unregister(element: Element) {
    this._registeredElements.delete(element);
  }
}

const resizeObserverRegistry = new ResizeObserverRegistry();

export function useResizeObserver(resizeHandler: ResizeHandler) {
  const ref = useRef<Element | null>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element != null) {
      resizeObserverRegistry.register(element, resizeHandler);
      return () => {
        resizeObserverRegistry.unregister(element);
      };
    }
  }, [resizeHandler]);
}
