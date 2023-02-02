import React from "react";

const alignmentMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

export type Alignment = keyof typeof alignmentMap;

export interface VStackProps {
  horizontalAlignment?: Alignment;
  verticalAlignment?: Alignment;
  spacing?: React.CSSProperties["gap"];
  padding?: React.CSSProperties["padding"];
  width?: React.CSSProperties["width"];
  fullWidth?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  function VStack({
    horizontalAlignment = "center",
    verticalAlignment = "center",
    spacing = 0,
    padding = 0,
    width = "auto",
    fullWidth = false,
    children,
    style,
    className,
  }: VStackProps) {
    const finalWidth = fullWidth ? "100%" : width;

    const propertyDrivenStyles: React.CSSProperties = {
      display: "flex",
      position: "relative",
      padding: padding,
      gap: spacing,
      width: finalWidth,
      height: "100%",
      flexDirection: "column",
      justifyContent: alignmentMap[verticalAlignment],
      alignItems: alignmentMap[horizontalAlignment],
    };

    return (
      <div className={className} style={{ ...propertyDrivenStyles, ...style }}>
        {children}
      </div>
    );
  }
);
