import React, { useRef } from "react";
import { useForkRef } from "../foundation/react/hooks/use_fork_ref";

export interface BoxProps {
  fullHeight?: boolean;
  fullWidth?: boolean;
  fillSpace?: boolean;
  shadow?: React.CSSProperties["boxShadow"];
  scroll?: boolean;
  fillSpaceWeight?: number;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  enableResizeTop?: boolean;
  enableResizeRight?: boolean;
  enableResizeBottom?: boolean;
  enableResizeLeft?: boolean;

  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  minWidth?: React.CSSProperties["minWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];
  padding?: React.CSSProperties["padding"];
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
  transform?: React.CSSProperties["transform"];
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(function Box(
  {
    width = "auto",
    height = "auto",
    fullHeight = false,
    fullWidth = false,
    fillSpace = false,
    shadow,
    scroll = false,
    fillSpaceWeight = 1,
    style,
    className,
    children,
    enableResizeTop,
    enableResizeRight,
    enableResizeBottom,
    enableResizeLeft,
    ...otherStyles
  }: BoxProps,
  ref
) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const isFlexing = fillSpace && width === "auto" && height === "auto";
  const flex = isFlexing ? fillSpaceWeight : undefined;
  const finalWidth = fullWidth ? "100%" : width;
  const finalHeight = fullHeight ? "100%" : height;
  const overflow = scroll ? "auto" : "hidden";
  const forkedRef = useForkRef(ref, boxRef);

  if (isFlexing) {
    enableResizeTop = false;
    enableResizeRight = false;
    enableResizeBottom = false;
    enableResizeLeft = false;
  }

  function startTopResize() {
    function drag() {}
    function endDrag() {}
  }

  return (
    <div
      ref={forkedRef}
      style={{
        ...style,
        position: "relative",
        width: finalWidth,
        height: finalHeight,
        boxSizing: "border-box",
        overflow,
        flex,
        boxShadow: shadow,
        ...otherStyles,
      }}
      className={className}
    >
      {children}
    </div>
  );
});
