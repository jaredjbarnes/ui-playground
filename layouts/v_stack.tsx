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
  height?: React.CSSProperties["height"];
  as?:
    | string
    | React.ElementType
    | React.ComponentType<{ children: React.ReactNode }>;
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
      height = "100%",
      as = "div",
      children,
      style,
      className,
    }: VStackProps,
    ref
  ) {
    const As = as as React.ComponentType | React.ElementType;
    const propertyDrivenStyles: React.CSSProperties = {
      display: "flex",
      position: "relative",
      width,
      height,
      padding: "0px",
      margin: "0px",
      opacity: "1",
      zIndex: "1",
      flexDirection: "column",
      justifyContent: alignmentMap[verticalAlignment],
      alignItems: alignmentMap[horizontalAlignment],
    };

    return (
      <As
        ref={ref}
        className={className}
        style={{ ...propertyDrivenStyles, ...style }}
      >
        {children}
      </As>
    );
  }
);
