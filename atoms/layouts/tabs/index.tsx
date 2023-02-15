import React, { useState } from "react";
import { Box } from "../box";
import { VStack } from "../v_stack";
import { TabProps } from "./tab";

export interface TabsProps {
  children: React.ReactElement<TabProps> | Array<React.ReactElement<TabProps>>;
  selectedTabIndex?: number;
}

export function Tabs({ children, selectedTabIndex = 0 }: TabsProps) {
  const childrenArray = React.Children.map(children, (c) => c);
  selectedTabIndex = Math.max(
    Math.min(childrenArray.length - 1, selectedTabIndex),
    0
  );
  const [focusedTabIndex, setFocusedTabIndex] = useState(selectedTabIndex);

  const buttons = childrenArray.map((child, index) => {
    const isSelected = index === focusedTabIndex;
    const id = child.props.id;

    function select() {
      setFocusedTabIndex(index);
    }

    return (
      <button aria-selected={isSelected} aria-controls={id} onClick={select}>
        {child.props.name}
      </button>
    );
  });

  const article = childrenArray[focusedTabIndex];

  return (
    <VStack>
      <menu role="tablist" style={{ width: "100%" }}>
        {buttons}
      </menu>
      <Box fillSpace fullWidth zIndex={2}>
        {article}
      </Box>
    </VStack>
  );
}
