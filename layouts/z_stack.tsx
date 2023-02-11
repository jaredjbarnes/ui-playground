import React, { HTMLAttributes } from "react";

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

  const rootStyle: React.CSSProperties = {
    display: inline ? "inline-block" : "block",
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const itemStyle: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  };

  switch (verticalAlignment) {
    case "start": {
      itemStyle.alignItems = "flex-start";
      break;
    }
    case "center": {
      itemStyle.alignItems = "center";
      break;
    }
    case "end": {
      itemStyle.alignItems = "flex-end";
      break;
    }
  }

  switch (horizontalAlignment) {
    case "start": {
      itemStyle.justifyContent = "flex-start";
      break;
    }
    case "center": {
      itemStyle.justifyContent = "center";
      break;
    }
    case "end": {
      itemStyle.justifyContent = "flex-end";
      break;
    }
  }

  return (
    <As
      ref={ref}
      style={{ ...rootStyle, ...style }}
      className={className}
      {...attr}
    >
      {React.Children.map(children, (child) => {
        return <div style={itemStyle}>{child}</div>;
      })}
    </As>
  );
});
