import React, { useCallback, useLayoutEffect, useState } from "react";
import "../../../foundation/css/base.css";
import { FlexBox } from "../flex_box";
import { HStack } from "../h_stack";
import { VStack } from "../v_stack";
import { TabProps } from "./tab";
import { TabButton } from "./tab_button";

export interface TabsProps {
  children: React.ReactElement<TabProps> | Array<React.ReactElement<TabProps>>;
  tabAlignment?: "start" | "center" | "end";
  selectedTabIndex?: number;
}

export function Tabs({
  children,
  tabAlignment = "start",
  selectedTabIndex = 0,
}: TabsProps) {
  const childrenArray = React.Children.map(children, (c) => c);

  selectedTabIndex = Math.max(
    Math.min(childrenArray.length - 1, selectedTabIndex),
    0
  );

  const [activeTabIndex, setActiveTabIndex] = useState(selectedTabIndex);

  useLayoutEffect(() => {
    setActiveTabIndex(selectedTabIndex);
  }, [selectedTabIndex]);

  const select = useCallback(function select(index: number) {
    setActiveTabIndex(index);
  }, []);

  const buttons = childrenArray.map((child, index) => {
    const isSelected = index === activeTabIndex;
    const { id, name, isDisabled = false, error } = child.props;

    return (
      <TabButton
        id={id}
        index={index}
        name={name}
        isDisabled={isDisabled}
        isSelected={isSelected}
        error={error}
        onSelect={select}
      />
    );
  });

  const article = childrenArray[activeTabIndex];

  return (
    <VStack>
      <HStack
        as="menu"
        role="tablist"
        horizontalAlignment={tabAlignment}
        verticalAlignment="end"
        height="30px"
        zIndex={2}
      >
        {buttons}
      </HStack>
      <FlexBox>{article}</FlexBox>
    </VStack>
  );
}
