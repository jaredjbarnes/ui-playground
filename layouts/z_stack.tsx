import React from "react";

export type Alignment = "start" | "center" | "end";

export interface ZStackProps {
  horizontalAlignment?: Alignment;
  verticalAlignment?: Alignment;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const ZStack = React.forwardRef<HTMLDivElement, ZStackProps>(
  function ZStack(
    {
      horizontalAlignment = "center",
      verticalAlignment = "center",
      children,
      style,
      className,
    }: ZStackProps,
    ref
  ) {
    const propertyDrivenStyles: React.CSSProperties = {
      display: "block",
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
      <div
        ref={ref}
        style={{ ...propertyDrivenStyles, ...style }}
        className={className}
      >
        {React.Children.map(children, (child) => {
          return <div style={itemStyle}>{child}</div>;
        })}
      </div>
    );
  }
);
