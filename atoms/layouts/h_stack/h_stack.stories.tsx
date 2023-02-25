import React from "react";
import { HStack } from "./index";
import { FlexBox } from "../flex_box";

export default {
  title: "HStack",
  component: HStack,
};

export function AsExample() {
  return (
    <HStack height="auto">
      <input id="1" type="radio" checked name="First" />
      <FlexBox>First</FlexBox>
    </HStack>
  );
}
