import React, { useRef } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";
import { BottomResizeHandle } from "./bottom_resize_handle";
import { LeftResizeHandle } from "./left_resize_handle";
import { RightResizeHandle } from "./right_resize_handle";
import { TopResizeHandle } from "./top_resize_handle";

export interface BoxProps {
  as?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  fillSpace?: boolean;
  shadow?: React.CSSProperties["boxShadow"];
  scroll?: boolean;
  fillSpaceWeight?: number;
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
    as = "div",
    children,
    enableResizeOnTop,
    enableResizeOnRight,
    enableResizeOnBottom,
    enableResizeOnLeft,
    ...otherStyles
  }: BoxProps,
  ref
) {
  let handles: React.ReactElement[] = [];

  const As = as as React.ElementType;
  const boxRef = useRef<HTMLElement | null>(null);
  const isFlexing = fillSpace && width === "auto" && height === "auto";
  const flex = isFlexing ? fillSpaceWeight : undefined;
  const finalWidth = fullWidth ? "100%" : width;
  const finalHeight = fullHeight ? "100%" : height;
  const overflow = scroll ? "auto" : "hidden";
  const forkedRef = useForkRef(ref, boxRef);

  if (isFlexing) {
    enableResizeOnTop = false;
    enableResizeOnRight = false;
    enableResizeOnBottom = false;
    enableResizeOnLeft = false;
  } else {
    if (enableResizeOnTop) {
      handles.push(<TopResizeHandle targetRef={boxRef} />);
    }

    if (enableResizeOnBottom) {
      handles.push(<BottomResizeHandle targetRef={boxRef} />);
    }

    if (enableResizeOnLeft) {
      handles.push(<LeftResizeHandle targetRef={boxRef} />);
    }

    if (enableResizeOnRight) {
      handles.push(<RightResizeHandle targetRef={boxRef} />);
    }
  }

  if (scroll) {
    children = <div style={{ ...content, overflow }}>{children}</div>;
  }

  return (
    <As
      ref={forkedRef}
      style={{
        position: "relative",
        width: finalWidth,
        height: finalHeight,
        boxSizing: "border-box",
        flex,
        zIndex: "0",
        transform: "translate3d(0,0,0)",
        boxShadow: shadow,
        ...style,
        ...otherStyles,
      }}
      className={className}
    >
      {children}
      {handles}
    </As>
  );
});
