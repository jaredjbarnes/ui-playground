import React from "react";
import { parsePadding } from "./parsePadding";

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
  leftPadding?: React.CSSProperties["paddingLeft"];
  rightPadding?: React.CSSProperties["paddingRight"];
  topPadding?: React.CSSProperties["paddingTop"];
  bottomPadding?: React.CSSProperties["paddingBottom"];
  width?: React.CSSProperties["width"];
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  function VStack(
    {
      horizontalAlignment = "center",
      verticalAlignment = "center",
      spacing = 0,
      padding,
      topPadding = 0,
      rightPadding = 0,
      bottomPadding = 0,
      leftPadding = 0,
      width = "100%",
      children,
      style,
      className,
    }: VStackProps,
    ref
  ) {
    if (typeof padding !== "undefined") {
      const parts = parsePadding(padding);

      if (parts.length > 0) {
        topPadding = parts[0];
        rightPadding = parts[1];
        bottomPadding = parts[2];
        leftPadding = parts[3];
      }
    }

    const propertyDrivenStyles: React.CSSProperties = {
      display: "flex",
      position: "relative",
      padding: padding,
      gap: spacing,
      width,
      height: "100%",
      opacity: "1",
      zIndex: "1",
      flexDirection: "column",
      justifyContent: alignmentMap[verticalAlignment],
      alignItems: alignmentMap[horizontalAlignment],
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{ ...propertyDrivenStyles, ...style }}
      >
        {children}
      </div>
    );
  }
);
