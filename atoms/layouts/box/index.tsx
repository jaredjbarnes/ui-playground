import React, { HTMLAttributes, useRef } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";
import { BottomResizeHandle } from "./bottom_resize_handle";
import { LeftResizeHandle } from "./left_resize_handle";
import { RightResizeHandle } from "./right_resize_handle";
import { TopResizeHandle } from "./top_resize_handle";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  scroll?: boolean;
  enableResizeOnTop?: boolean;
  enableResizeOnRight?: boolean;
  enableResizeOnBottom?: boolean;
  enableResizeOnLeft?: boolean;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  minWidth?: React.CSSProperties["minWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  maxWidth?: React.CSSProperties["maxWidth"];
  maxHeight?: React.CSSProperties["maxHeight"];
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

const content: React.CSSProperties = {
  position: "absolute",
  top: "0",
  bottom: "0",
  width: "100%",
  height: "100%",
};

export const Box = React.forwardRef<HTMLElement, BoxProps>(function Box(
  {
    minWidth,
    width = "auto",
    maxWidth,
    minHeight,
    height = "auto",
    maxHeight,
    fullHeight = false,
    fullWidth = false,
    boxShadow,
    scroll = false,
    style,
    className,
    as = "div",
    children,
    enableResizeOnTop,
    enableResizeOnRight,
    enableResizeOnBottom,
    enableResizeOnLeft,
    padding,
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
    ...otherProps
  }: BoxProps,
  ref
) {
  const handles: React.ReactElement[] = [];
  const finalWidth = fullWidth ? "100%" : width;
  const finalHeight = fullHeight ? "100%" : height;
  const As = as as React.ElementType;
  const boxRef = useRef<HTMLElement | null>(null);
  const overflow = scroll ? "auto" : "hidden";
  const forkedRef = useForkRef(ref, boxRef);

  if (enableResizeOnTop) {
    handles.push(<TopResizeHandle key={1} targetRef={boxRef} />);
  }

  if (enableResizeOnBottom) {
    handles.push(<BottomResizeHandle key={2} targetRef={boxRef} />);
  }

  if (enableResizeOnLeft) {
    handles.push(<LeftResizeHandle key={3} targetRef={boxRef} />);
  }

  if (enableResizeOnRight) {
    handles.push(<RightResizeHandle key={4} targetRef={boxRef} />);
  }

  if (scroll) {
    children = <div style={{ ...content, overflow }}>{children}</div>;
  }

  return (
    <As
      style={{
        overflow,
        position: "relative",
        minWidth,
        width: finalWidth,
        maxWidth,
        minHeight,
        height: finalHeight,
        maxHeight,
        boxSizing: "border-box",
        zIndex: "0",
        transform: "translate3d(0,0,0)",
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
        ...style,
      }}
      className={className}
      {...otherProps}
      ref={forkedRef}
    >
      {children}
      {handles}
    </As>
  );
});
