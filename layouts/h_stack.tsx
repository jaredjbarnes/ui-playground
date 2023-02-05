import React from "react";
import { parsePadding } from "./parsePadding";
import { Spacer } from "./spacer";

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
  leftPadding?: React.CSSProperties["paddingLeft"];
  rightPadding?: React.CSSProperties["paddingRight"];
  topPadding?: React.CSSProperties["paddingTop"];
  bottomPadding?: React.CSSProperties["paddingBottom"];
  height?: React.CSSProperties["height"];
  fullHeight?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  function HStack(
    {
      horizontalAlignment = "center",
      verticalAlignment = "center",
      spacing = 0,
      padding,
      topPadding = 0,
      rightPadding = 0,
      bottomPadding = 0,
      leftPadding = 0,
      height = "100%",
      children,
      style,
      className,
    }: HStackProps,
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
      gap: spacing,
      height,
      paddingTop: topPadding,
      paddingBottom: bottomPadding,
      width: "100%",
      opacity: "1",
      zIndex: "1",
      flexDirection: "row",
      justifyContent: justifyContentMap[horizontalAlignment],
      alignItems: alignItemsMap[verticalAlignment],
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{ ...propertyDrivenStyles, ...style }}
      >
        {leftPadding && <Spacer width={leftPadding} />}
        {children}
        {rightPadding && <Spacer width={rightPadding} />}
      </div>
    );
  }
);
