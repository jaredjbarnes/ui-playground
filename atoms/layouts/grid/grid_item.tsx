import React, { useEffect } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";
import { useResizeObserver } from "../../../foundation/react/hooks/use_resize_observer";
import { MasonryLayoutEngine } from "./masonry_layout_engine";

export interface GridItemProps {
  index: number;
  masonryLayoutEngine: MasonryLayoutEngine;
  child: React.ReactElement;
  animate?: boolean;
}

export function GridItem({
  child,
  index,
  animate = false,
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
  const originalStyle = child.props.style || {};

  const style: React.CSSProperties = {
    position: "absolute",
    opacity: item.isVisible ? 1 : 0,
    top: "0",
    left: "0",
    width: `${masonryLayoutEngine.getColumnWidth()}px`,
    transition: animate
      ? "transform 1000ms cubic-bezier(.07,.77,.31,.92)"
      : undefined,
    transform: `translate(${masonryLayoutEngine.getLeftOffsetForColumn(
      item.column
    )}px, ${item.top}px)`,
  };

  return React.cloneElement(child, {
    ...child.props,
    style: { ...originalStyle, ...style },
    key: index,
    ref: forkedRef,
  });
}
