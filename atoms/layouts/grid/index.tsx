import { useAsyncValue } from "ergo-hex";
import React, { useLayoutEffect, useState } from "react";
import { useForkRef } from "../../../foundation/react/hooks/use_fork_ref";
import { useResizeObserver } from "../../../foundation/react/hooks/use_resize_observer";
import { GridItem } from "./grid_item";
import { MasonryLayoutEngine } from "./masonry_layout_engine";

export interface GridProps {
  gap?: number;
  minColumnWidth?: number;
  as?: string;
  minWidth?: React.CSSProperties["minWidth"];
  width?: React.CSSProperties["width"];
  maxWidth?: React.CSSProperties["maxWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  height?: React.CSSProperties["height"];
  maxHeight?: React.CSSProperties["maxHeight"];
  children?: React.ReactElement[];
  style?: React.CSSProperties;
  className?: string;
}

export const Grid = React.forwardRef(function Grid(
  {
    as = "div",
    gap=0,
    minColumnWidth = 100,
    minWidth,
    width = "100%",
    maxWidth,
    minHeight,
    height = "auto",
    maxHeight,
    children = [],
    style,
    className,
  }: GridProps,
  ref: React.Ref<HTMLElement>
) {
  const [masonryLayoutEngine] = useState(() => new MasonryLayoutEngine());
  const childrenLength = children.length;
  masonryLayoutEngine.setLength(childrenLength);

  useAsyncValue(masonryLayoutEngine.isDirtyBroadcast);

  const As = as as React.ElementType;
  const gridStyles: React.CSSProperties = {
    position: "relative",
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
  };

  const resizeRef = useResizeObserver((entry) => {
    masonryLayoutEngine.setViewportWidth(entry.borderBoxSize[0].inlineSize);
  });

  const forkedRef = useForkRef(ref, resizeRef);

  useLayoutEffect(() => {
    masonryLayoutEngine.setMinColumnWidth(minColumnWidth);
  }, [minColumnWidth]);

  useLayoutEffect(() => {
    masonryLayoutEngine.setGap(gap);
  }, [gap]);

  useLayoutEffect(() => {
    masonryLayoutEngine.setLength(childrenLength);
  }, [childrenLength]);

  return (
    <As
      ref={forkedRef}
      style={{ ...style, ...gridStyles }}
      className={className}
    >
      {children.map((child, index) => {
        return (
          <GridItem
            key={index}
            child={child}
            index={index}
            masonryLayoutEngine={masonryLayoutEngine}
          />
        );
      })}
    </As>
  );
});
