import React from "react";
import { Spacer } from "./spacer";
import { Box } from "./box";
import { HStack } from "./h_stack";

export default {
  title: "HStack",
  component: HStack,
};

const rect = {
  width: "100px",
  height: "100px",
};

export const Primary = () => (
  <HStack fullHeight horizontalAlignment="center">
    <Box
      border="3px solid black"
      backgroundColor="red"
      borderRadius="10px"
      width="100px"
      minWidth="100px"
      height="100px"
    />
    <Spacer width="10px" />
    <Box
      backgroundColor="orange"
      shadow="2px 2px 10px rgba(0,0,0,0.25)"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer width="10px" />
    <Box
      backgroundColor="yellow"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer width="10px" />
    <Box
      backgroundColor="green"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer width="10px" />
    <Box
      backgroundColor="blue"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer width="10px" />
    <Box
      backgroundColor="magenta"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer width="10px" />
    <Box
      backgroundColor="indigo"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
  </HStack>
);
