import React, { useEffect } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";
import {
  TriggerConfig,
  useResizeObserver,
} from "../../../foundation/react/hooks/use_resize_observer";
import { delay } from "../../../utils/delay";
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
  }, TriggerConfig.Height);

  const forkedRef = useForkRef(ref, child.props.ref);
  const item = masonryLayoutEngine.getItemByIndex(index);
  const originalStyle = child.props.style || {};

  const style: React.CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: `${masonryLayoutEngine.getColumnWidth()}px`,

    transform: `translate(${masonryLayoutEngine.getLeftOffsetForColumn(
      item.column
    )}px, ${item.top}px)`,
  };

  // This will prevent animation on first load.
  useEffect(() => {
    const timeoutPromise = delay(animationDuration);

    timeoutPromise.then(() => {
      const element = ref.current as HTMLElement;
      if (element != null) {
        element.style.transition = animate
          ? `transform ${animationDuration}ms, width ${animationDuration}ms cubic-bezier(.06,.44,.38,1.01)`
          : "";
      }
    });

    return () => {
      timeoutPromise.cancel("Unmounted");
    };
  }, []);

  return React.cloneElement(child, {
    ...child.props,
    style: { ...originalStyle, ...style },
    key: index,
    ref: forkedRef,
  });
}
