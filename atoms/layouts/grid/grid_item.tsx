import React, { useEffect } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";
import { useResizeObserver } from "../../../foundation/react/hooks/use_resize_observer";
import { MasonryLayoutEngine } from "./masonry_layout_engine";

export interface GridItemProps {
  index: number;
  masonryLayoutEngine: MasonryLayoutEngine;
  child: React.ReactElement;
  animate?: boolean;
  animationDuration?: number;
}

export function GridItem({
  child,
  index,
  animate = false,
  animationDuration = 1000,
  masonryLayoutEngine,
}: GridItemProps) {
  const ref = useResizeObserver((_, height) => {
    const item = masonryLayoutEngine.getItemByIndex(index);
    const currentHeight = item.height;
    const isHeightDifferent = currentHeight != height;

    if (isHeightDifferent) {
      masonryLayoutEngine.setItemHeight(index, height);
    }
  });

  const forkedRef = useForkRef(ref, child.props.ref);
  const item = masonryLayoutEngine.getItemByIndex(index);
  const isVisible = item.isVisible;
  const originalStyle = child.props.style || {};

  const style: React.CSSProperties = {
    position: "absolute",
    opacity: item.isVisible ? 1 : 0,
    top: "0",
    left: "0",
    width: `${masonryLayoutEngine.getColumnWidth()}px`,
    transition: animate
      ? `transform ${animationDuration}ms cubic-bezier(.01,.62,.08,1)`
      : undefined,
    transform: `translate(${masonryLayoutEngine.getLeftOffsetForColumn(
      item.column
    )}px, ${item.top}px)`,
  };

  if (!isVisible) {
    style.transition = "";
  }

  return React.cloneElement(child, {
    ...child.props,
    style: { ...originalStyle, ...style },
    key: index,
    ref: forkedRef,
  });
}
