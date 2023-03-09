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
  border?: string;
  borderRadius?: string;
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

const contentStyle: React.CSSProperties = {
  position: "absolute",
  top: "0px",
  left: "0px",
  bottom: "0px",
  right: "0px",
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
    style = {},
    className,
    as = "div",
    children,
    enableResizeOnTop,
    enableResizeOnRight,
    enableResizeOnBottom,
    enableResizeOnLeft,
    padding,
    background,
    border,
    borderRadius,
    zIndex = 0,
    opacity,
    transform,
    ...otherProps
  }: BoxProps,
  ref
) {
  const As = as as React.ElementType;
  const handles: React.ReactElement[] = [];
  const finalWidth = fullWidth ? "100%" : width;
  const finalHeight = fullHeight ? "100%" : height;
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
    children = <div style={{ ...contentStyle, overflow }}>{children}</div>;
  }

  return (
    <As
      ref={forkedRef}
      style={{
        overflow: "visible",
        position: "relative",
        minWidth,
        width: finalWidth,
        maxWidth,
        minHeight,
        height: finalHeight,
        maxHeight,
        boxSizing: "border-box",
        zIndex,
        transform: transform == null ? "translate3d(0,0,0)" : transform,
        padding,
        boxShadow,
        background,
        borderRadius,
        border,
        opacity,
        ...style,
      }}
      className={className}
      {...otherProps}
    >
      {children}
      {handles}
    </As>
  );
});
