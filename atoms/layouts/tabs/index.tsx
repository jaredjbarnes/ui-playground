import React, { useLayoutEffect, useState } from "react";
import { Box } from "../box";
import { HStack } from "../h_stack";
import { Spacer } from "../spacer";
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
  useLayoutEffect(() => {
    setFocusedTabIndex(selectedTabIndex);
  }, [selectedTabIndex]);

  const buttons = childrenArray.map((child, index) => {
    const isSelected = index === focusedTabIndex;
    const id = child.props.id;

    function select() {
      setFocusedTabIndex(index);
    }

    return (
      <button
        key={index}
        aria-selected={isSelected}
        aria-controls={id}
        onClick={select}
      >
        {child.props.name}
      </button>
    );
  });

  const article = childrenArray[focusedTabIndex];

  return (
    <VStack>
      <HStack horizontalAlignment="start" as="menu" role="tablist" height="auto" zIndex={2}>
        {buttons}
      </HStack>
      <Box fillSpace fullWidth>
        {article}
      </Box>
    </VStack>
  );
}
