import React, { HTMLAttributes } from "react";

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

export interface HStackProps extends HTMLAttributes<HTMLElement> {
  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;
  height?: React.CSSProperties["height"];
  width?: React.CSSProperties["width"];
  fullHeight?: boolean;
  as?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const HStack = React.forwardRef<HTMLElement, HStackProps>(
  function HStack(
    {
      horizontalAlignment = "center",
      verticalAlignment = "center",
      height = "100%",
      width = "100%",
      as = "div",
      children,
      style,
      className,
      ...attr
    }: HStackProps,
    ref
  ) {
    const As = as as React.ElementType;
    const propertyDrivenStyles: React.CSSProperties = {
      display: "flex",
      position: "relative",
      padding: "0px",
      margin: "0px",
      height,
      width,
      opacity: "1",
      zIndex: "1",
      flexDirection: "row",
      justifyContent: justifyContentMap[horizontalAlignment],
      alignItems: alignItemsMap[verticalAlignment],
    };

    return (
      <As
        ref={ref}
        className={className}
        style={{ ...propertyDrivenStyles, ...style }}
        {...attr}
      >
        {children}
      </As>
    );
  }
);
