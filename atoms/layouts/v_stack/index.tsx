import React, { HTMLAttributes } from "react";
import { checkAllValuesForAuto } from "../../../utils/stack_utils";

const alignmentMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

export type Alignment = keyof typeof alignmentMap;

export interface VStackProps extends HTMLAttributes<HTMLElement> {
  horizontalAlignment?: Alignment;
  verticalAlignment?: Alignment;
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

export const VStack = React.forwardRef(function VStack(
  {
    horizontalAlignment = "center",
    verticalAlignment = "center",
    minWidth,
    width = "100%",
    maxWidth,
    minHeight,
    height = "100%",
    maxHeight,
    zIndex = 0,
    as = "div",
    inline = false,
    children,
    style,
    className,
    ...attr
  }: VStackProps,
  ref: React.Ref<HTMLElement>
) {
  checkAllValuesForAuto(minWidth, width, maxWidth);

  const As = as as React.ElementType;

  const propertyDrivenStyles: React.CSSProperties = {
    display: inline ? "inline-flex" : "flex",
    position: "relative",
    minWidth,
    width,
    minHeight,
    height,
    padding: "0px",
    margin: "0px",
    opacity: "1",
    zIndex,
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
