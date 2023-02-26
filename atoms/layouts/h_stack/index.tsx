import React, { HTMLAttributes } from "react";
import { checkAllValuesForAuto } from "../../../utils/stack_utils";

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
  minWidth?: string;
  width?: string;
  maxWidth?: string;
  minHeight?: string;
  height?: string;
  maxHeight?: string;
  zIndex?: number;
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

  checkAllValuesForAuto(minHeight, height, maxHeight);
  
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
