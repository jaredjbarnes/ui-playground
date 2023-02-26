import React, { useLayoutEffect, useRef } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";

export interface FlexBoxProps {
  fillSpaceWeight?: number;
  scroll?: boolean;
  padding?: React.CSSProperties["padding"];
  boxShadow?: React.CSSProperties["boxShadow"];
  background?: React.CSSProperties["background"];
  backgroundColor?: React.CSSProperties["backgroundColor"];
  backgroundSize?: React.CSSProperties["backgroundSize"];
  backgroundImage?: React.CSSProperties["backgroundImage"];
  backgroundRepeat?: React.CSSProperties["backgroundRepeat"];
  border?: React.CSSProperties["border"];
  borderRadius?: React.CSSProperties["borderRadius"];
  borderTop?: React.CSSProperties["borderTop"];
  borderRight?: React.CSSProperties["borderRight"];
  borderBottom?: React.CSSProperties["borderBottom"];
  borderLeft?: React.CSSProperties["borderLeft"];
  opacity?: React.CSSProperties["opacity"];
  zIndex?: React.CSSProperties["zIndex"];
  transform?: React.CSSProperties["transform"];
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const contentStyle: React.CSSProperties = {
  position: "absolute",
  top: "0px",
  left: "0px",
  bottom: "0px",
  right: "0px",
};

export const FlexBox = React.forwardRef(function FillBox(
  { scroll = false, children, fillSpaceWeight = 1, ...style }: FlexBoxProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const fillBoxRef = useRef<HTMLDivElement | null>(null);
  const forkedRef = useForkRef(ref, fillBoxRef);

  useLayoutEffect(() => {
    const element = fillBoxRef.current;

    if (element != null) {
      // This is faster than getComputedStyle. And we know how the parents style is set.
      // This approach has its cons, but its fast. getComputedStyle causes a style recalc.
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
      style={{
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          ...style,
          ...contentStyle,
          overflow: scroll ? "auto" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
});
