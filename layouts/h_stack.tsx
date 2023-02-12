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
  inline?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const HStack = React.forwardRef(function HStack(
  {
    horizontalAlignment = "center",
    verticalAlignment = "center",
    height = "100%",
    width = "100%",
    as = "div",
    inline = false,
    children,
    style,
    className,
    ...attr
  }: HStackProps,
  ref: React.Ref<HTMLElement>
) {
  const As = as as React.ElementType;

  const propertyDrivenStyles: React.CSSProperties = {
    display: inline ? "inline-flex" : "flex",
    position: "relative",
    padding: "0px",
    margin: "0px",
    height,
    width,
    opacity: "1",
    zIndex: "0",
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
});
