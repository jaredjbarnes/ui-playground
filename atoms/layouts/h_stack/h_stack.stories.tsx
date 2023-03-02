import React from "react";
import { HStack } from "./index";
import { Spacer } from "../spacer";

export default {
  title: "HStack",
  component: HStack,
};

export function ButtonExample() {
  return (
    <HStack inline as="button" height="40px" width="auto">
      <Spacer width="8px" />
      <span>Span</span>
      <Spacer width="8px" />
      <span>Icon</span>
      <Spacer width="8px" />
    </HStack>
  );
}
