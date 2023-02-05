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
      width = "100%",
      children,
      style,
      className,
    }: VStackProps,
    ref
  ) {
    const propertyDrivenStyles: React.CSSProperties = {
      display: "flex",
      position: "relative",
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
