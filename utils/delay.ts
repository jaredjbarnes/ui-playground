import { WeakPromise } from "ergo-hex";

export function delay(time: number) {
  return new WeakPromise<undefined>((resolve) => {
    const id = window.setTimeout(resolve, time);

    return () => {
      window.clearTimeout(id);
    };
  });
}
