import React from "react";

export interface GridProps {
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  spacing?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export const Grid = React.forwardRef(function Grid({
  minHeight = "100px",
  minWidth = "100px",
  maxHeight = "1fr",
  maxWidth = "1fr",
  spacing = "0",
  style,
  className,
  children,
}: GridProps) {
  const gridStyle: React.CSSProperties = {
    display: "grid",
    alignItems: "center",
    width: "100%",
    gridGap: spacing,
    gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, ${maxWidth}))`,
    gridAutoRows: `minmax(${minHeight}, ${maxHeight})`,
  };

  return (
    <div className={className} style={{ ...gridStyle, ...style }}>
      {children}
    </div>
  );
});
