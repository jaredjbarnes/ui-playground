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
  transform?: React.CSSProperties["transform"];
}

const topResizeHandle: React.CSSProperties = {
  position: "absolute",
  top: "-5px",
  left: "0px",
  height: "10px",
  width: "100%",
  cursor: "ns-resize",
};

const rightResizeHandle: React.CSSProperties = {
  position: "absolute",
  top: "0px",
  right: "-5px",
  height: "100%",
  width: "10px",
  cursor: "ew-resize",
};

const bottomResizeHandle: React.CSSProperties = {
  position: "absolute",
  bottom: "-5px",
  left: "0px",
  height: "10px",
  width: "100%",
  cursor: "ns-resize",
};

const leftResizeHandle: React.CSSProperties = {
  position: "absolute",
  top: "0px",
  left: "-5px",
  height: "100%",
  width: "10px",
  cursor: "ew-resize",
};

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
    enableResizeOnTop,
    enableResizeOnRight,
    enableResizeOnBottom,
    enableResizeOnLeft,
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
    enableResizeOnTop = false;
    enableResizeOnRight = false;
    enableResizeOnBottom = false;
    enableResizeOnLeft = false;
  }

  function startVerticalResize(event: React.MouseEvent) {
    const box = boxRef.current;
    if (box == null) {
      return;
    }

    const startY = event.clientY;
    const startRect = box.getBoundingClientRect();

    const drag = (event: MouseEvent) => {
      const deltaY = event.clientY - startY;

      const newHeight = startRect.height + deltaY;
      box.style.height = `${newHeight}px`;

      event.stopPropagation();
      event.preventDefault();
    };

    const endDrag = () => {
      document.body.removeEventListener("mousemove", drag);
      document.body.removeEventListener("mouseup", endDrag);
      document.body.removeEventListener("mouseleave", endDrag);

      event.stopPropagation();
      event.preventDefault();
    };

    document.body.addEventListener("mousemove", drag);
    document.body.addEventListener("mouseup", endDrag);
    document.body.addEventListener("mouseleave", endDrag);

    event.stopPropagation();
    event.preventDefault();
  }

  function startHorizontalResize(event: React.MouseEvent) {
    const box = boxRef.current;
    if (box == null) {
      return;
    }

    const startX = event.clientX;
    const startRect = box.getBoundingClientRect();

    const drag = (event: MouseEvent) => {
      const deltaX = event.clientX - startX;

      const newWidth = startRect.width + deltaX;
      box.style.width = `${newWidth}px`;

      event.stopPropagation();
      event.preventDefault();
    };

    const endDrag = () => {
      document.body.removeEventListener("mousemove", drag);
      document.body.removeEventListener("mouseup", endDrag);
      document.body.removeEventListener("mouseleave", endDrag);

      event.stopPropagation();
      event.preventDefault();
    };

    document.body.addEventListener("mousemove", drag);
    document.body.addEventListener("mouseup", endDrag);
    document.body.addEventListener("mouseleave", endDrag);

    event.stopPropagation();
    event.preventDefault();
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
      {enableResizeOnTop && (
        <div onMouseDown={startVerticalResize} style={topResizeHandle}></div>
      )}
      {enableResizeOnRight && (
        <div
          onMouseDown={startHorizontalResize}
          style={rightResizeHandle}
        ></div>
      )}
      {enableResizeOnBottom && (
        <div onMouseDown={startVerticalResize} style={bottomResizeHandle}></div>
      )}
      {enableResizeOnLeft && (
        <div onMouseDown={startHorizontalResize} style={leftResizeHandle}></div>
      )}
    </div>
  );
});
