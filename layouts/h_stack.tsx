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
      height = "100%",
      children,
      style,
      className,
    }: HStackProps,
    ref
  ) {
    const propertyDrivenStyles: React.CSSProperties = {
      display: "flex",
      position: "relative",
      height,
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
        {children}
      </div>
    );
  }
);
