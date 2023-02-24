import React from "react";

export interface GridProps {
  minColumnWidth?: React.CSSProperties["width"];
  maxColumnWidth?: React.CSSProperties["width"];
  as?: string;
  minWidth?: React.CSSProperties["minWidth"];
  width?: React.CSSProperties["width"];
  maxWidth?: React.CSSProperties["maxWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  height?: React.CSSProperties["height"];
  maxHeight?: React.CSSProperties["maxHeight"];
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Grid = React.forwardRef(function Grid(
  {
    as = "div",
    minColumnWidth = "0px",
    maxColumnWidth = "1fr",
    minWidth,
    width = "100%",
    maxWidth,
    minHeight,
    height = "auto",
    maxHeight,
    children,
    style,
    className,
  }: GridProps,
  ref: React.Ref<HTMLElement>
) {
  const As = as as React.ElementType;
  const gridStyles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, ${maxColumnWidth}))`,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
  };

  return (
    <As ref={ref} style={{ ...style, ...gridStyles }} className={className}>
      {children}
    </As>
  );
});
