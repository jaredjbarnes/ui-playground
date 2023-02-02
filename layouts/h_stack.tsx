import React from "react";

const justifyContentMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

const alignItemsMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

export type HorizontalAlignment = keyof typeof justifyContentMap;
export type VerticalAlignment = keyof typeof alignItemsMap;

export interface HStackProps {
  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;
  spacing?: React.CSSProperties["gap"];
  padding?: React.CSSProperties["padding"];
  height?: React.CSSProperties["height"];
  fullHeight?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  function HStack({
    horizontalAlignment = "center",
    verticalAlignment = "center",
    spacing = 0,
    padding = 0,
    height = "auto",
    fullHeight = false,
    children,
    style,
    className,
  }: HStackProps) {
    const finalHeight = fullHeight ? "100%" : height;

    const propertyDrivenStyles: React.CSSProperties = {
      display: "flex",
      position: "relative",
      padding: padding,
      gap: spacing,
      height: finalHeight,
      width: "100%",
      opacity: "1",
      zIndex: "1",
      flexDirection: "row",
      justifyContent: justifyContentMap[horizontalAlignment],
      alignItems: alignItemsMap[verticalAlignment],
    };

    return (
      <div className={className} style={{ ...propertyDrivenStyles, ...style }}>
        {children}
      </div>
    );
  }
);
