import React, { HTMLAttributes } from "react";

const rootStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "100%",
  zIndex: "0",
};

const itemStyle: React.CSSProperties = {
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
};

export type Alignment = "start" | "center" | "end";

export interface ZStackProps extends HTMLAttributes<HTMLElement> {
  horizontalAlignment?: Alignment;
  verticalAlignment?: Alignment;
  as?: string;
  children?: React.ReactNode;
  inline?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export const ZStack = React.forwardRef(function ZStack(
  {
    horizontalAlignment = "center",
    verticalAlignment = "center",
    as = "div",
    inline = false,
    children,
    style,
    className,
    ...attr
  }: ZStackProps,
  ref: React.Ref<HTMLElement>
) {
  const As = as as React.ElementType;
  const rootDisplay = inline ? "inline-block" : "block";
  let itemAlignItems = "flex-start";
  let itemJustifyContent = "flex-start";

  switch (verticalAlignment) {
    case "start": {
      itemAlignItems = "flex-start";
      break;
    }
    case "center": {
      itemAlignItems = "center";
      break;
    }
    case "end": {
      itemAlignItems = "flex-end";
      break;
    }
  }

  switch (horizontalAlignment) {
    case "start": {
      itemJustifyContent = "flex-start";
      break;
    }
    case "center": {
      itemJustifyContent = "center";
      break;
    }
    case "end": {
      itemJustifyContent = "flex-end";
      break;
    }
  }

  return (
    <As
      ref={ref}
      style={{ ...rootStyle, display: rootDisplay, ...style }}
      className={className}
      {...attr}
    >
      {React.Children.map(children, (child) => {
        return (
          <div
            style={{
              ...itemStyle,
              alignItems: itemAlignItems,
              justifyContent: itemJustifyContent,
            }}
          >
            {child}
          </div>
        );
      })}
    </As>
  );
});
