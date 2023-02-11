import React, { HTMLAttributes } from "react";

const alignmentMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

export type Alignment = keyof typeof alignmentMap;

export interface VStackProps extends HTMLAttributes<HTMLElement> {
  horizontalAlignment?: Alignment;
  verticalAlignment?: Alignment;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  as?: string;
  children?: React.ReactNode;
  inline?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const VStack = React.forwardRef(function VStack(
  {
    horizontalAlignment = "center",
    verticalAlignment = "center",
    width = "100%",
    height = "100%",
    as = "div",
    inline = false,
    children,
    style,
    className,
    ...attr
  }: VStackProps,
  ref: React.Ref<HTMLElement>
) {
  const As = as as React.ElementType;
  
  const propertyDrivenStyles: React.CSSProperties = {
    display: inline ? "inline-flex" : "flex",
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
      {...attr}
    >
      {children}
    </As>
  );
});
