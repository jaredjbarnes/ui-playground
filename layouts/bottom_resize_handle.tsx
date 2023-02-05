import React from "react";
import { createVerticalResizeHandler } from "./resize_handlers";

const bottomResizeHandleStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "-5px",
  left: "0px",
  height: "10px",
  width: "100%",
  cursor: "ns-resize",
};

export interface BottomResizeHandleProps {
  targetRef: React.MutableRefObject<HTMLDivElement | null>;
}

export function BottomResizeHandle({ targetRef }: BottomResizeHandleProps) {
  const resizeHandler = createVerticalResizeHandler(targetRef);
  return <div onMouseDown={resizeHandler} style={bottomResizeHandleStyle}></div>;
}
