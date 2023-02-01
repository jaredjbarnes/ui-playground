import React, { useLayoutEffect } from "react";

export function useFocusSync<T extends HTMLElement>(
  elementRef: React.MutableRefObject<T | null>,
  isFocused: boolean
) {
  useLayoutEffect(() => {
    const element = elementRef.current;
    const hasButton = element != null;

    if (hasButton) {
      const isButtonElementActive = document.activeElement == element;

      if (isFocused && !isButtonElementActive) {
        element.focus();
      } else if (!isFocused && isButtonElementActive) {
        element.blur();
      }
    }
  }, [isFocused]);
}
