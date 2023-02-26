import React, { HTMLAttributes, useLayoutEffect, useRef } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";

export interface FlexBoxProps extends HTMLAttributes<HTMLElement> {
  fillSpaceWeight?: number;
  scroll?: boolean;
  padding?: string;
  boxShadow?: string;
  background?: string;
  backgroundColor?: string;
  backgroundSize?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  border?: string;
  borderRadius?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  opacity?: number;
  zIndex?: number;
  transform?: string;
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
  {
    scroll = false,
    children,
    fillSpaceWeight = 1,
    style,
    className,
    padding,
    boxShadow,
    background,
    backgroundColor,
    backgroundSize,
    backgroundImage,
    backgroundRepeat,
    border,
    borderRadius,
    borderRight,
    borderBottom,
    borderLeft,
    opacity,
    transform,
  }: FlexBoxProps,
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
          padding,
          boxShadow,
          background,
          backgroundColor,
          backgroundSize,
          backgroundImage,
          backgroundRepeat,
          border,
          borderRadius,
          borderRight,
          borderBottom,
          borderLeft,
          opacity,
          transform,
          ...style,
          ...contentStyle,
          overflow: scroll ? "auto" : "hidden",
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
});
