import React, { useLayoutEffect } from "react";

export function useFocusSync<T extends HTMLElement>(
  elementRef: React.MutableRefObject<T | null>,
  isFocused: boolean
) {
  useLayoutEffect(() => {
    const element = elementRef.current;
    const hasButton = element != null;

    if (hasButton) {
      const isElementActive = document.activeElement == element;

      if (isFocused && !isElementActive) {
        element.focus();
      } else if (!isFocused && isElementActive) {
        element.blur();
      }
    }
  }, [isFocused]);
}
