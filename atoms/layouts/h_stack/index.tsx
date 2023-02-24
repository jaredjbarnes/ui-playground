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
  minWidth?: React.CSSProperties["minWidth"];
  width?: React.CSSProperties["width"];
  maxWidth?: React.CSSProperties["maxWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  height?: React.CSSProperties["height"];
  maxHeight?: React.CSSProperties["maxHeight"];
  zIndex?: React.CSSProperties["zIndex"];
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
    minWidth,
    width = "100%",
    maxWidth,
    minHeight,
    height = "100%",
    maxHeight,
    as = "div",
    inline = false,
    zIndex = 0,
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
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
    opacity: "1",
    zIndex,
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
