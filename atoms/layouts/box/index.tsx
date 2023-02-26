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
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
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
  enableResizeOnTop?: boolean;
  enableResizeOnRight?: boolean;
  enableResizeOnBottom?: boolean;
  enableResizeOnLeft?: boolean;
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
    transform,
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
        transform: transform == null ? "translate3d(0,0,0)" : transform,
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
