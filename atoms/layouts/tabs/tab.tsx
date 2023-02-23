import React from "react";

const tabStyles = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

export interface TabProps {
  id: string;
  name: string;
  error?: Error;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Tab = React.forwardRef(function Tab({
  id,
  children,
  className,
  style,
}: TabProps) {
  return (
    <article
      id={id}
      role="tabpanel"
      className={className}
      style={{ ...style, ...tabStyles }}
    >
      {children}
    </article>
  );
});