import React, { useLayoutEffect, useRef } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";

export interface FillBoxProps {
  children?: React.ReactNode;
  fillSpaceWeight?: number;
}

const contentStyle: React.CSSProperties = {
  position: "absolute",
  top: "0px",
  left: "0px",
  bottom: "0px",
  right: "0px",
  overflow: "auto",
};

export const FillBox = React.forwardRef(function FillBox(
  { children, fillSpaceWeight = 1 }: FillBoxProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const fillBoxRef = useRef<HTMLDivElement | null>(null);
  const forkedRef = useForkRef(ref, fillBoxRef);

  useLayoutEffect(() => {
    const element = fillBoxRef.current;

    if (element != null) {
      // This is faster than getComputedStyle. And we know how the parents style is set.
      // Not easily maintainable, but fast ;)
      const isRow = element.parentElement?.style.flexDirection === "row";

      if (isRow) {
        element.style.width = "auto";
        element.style.height = "100%";
        element.style.flexGrow = `${fillSpaceWeight}`;
        element.style.flexShrink = `${fillSpaceWeight}`;
        element.style.flexBasis = "0%";
      } else {
        element.style.width = "100%";
        element.style.height = "auto";
        element.style.flexGrow = `${fillSpaceWeight}`;
        element.style.flexShrink = `${fillSpaceWeight}`;
        element.style.flexBasis = "0%";
      }
    }
  }, []);

  return (
    <div
      ref={forkedRef}
      style={{ position: "relative", boxSizing: "border-box", overflow: "" }}
    >
      <div style={contentStyle}>{children}</div>
    </div>
  );
});
