import React from "react";
import { Spacer } from "../spacer";
import { Box } from "../box";
import { HStack } from "./index";

export default {
  title: "HStack",
  component: HStack,
};

const rect = {
  width: "100px",
  height: "100px",
};

export const AsExample = () => {
  return (
    <HStack as="ul" width="auto" height="40px">
      <Spacer width="10px" />
      <li>First Item</li>
      <Spacer width="10px" />
      <li>Second Item</li>
      <Spacer width="10px" />
      <li>Third Item</li>
      <Spacer width="10px" />
      <li>Fourth Item</li>
      <Spacer width="10px" />
    </HStack>
  );
};

export const Primary = () => (
  <HStack horizontalAlignment="start">
    <Box
      border="3px solid black"
      backgroundColor="red"
      borderRadius="10px"
      width="100px"
      minWidth="100px"
      height="100px"
      enableResizeOnRight
      enableResizeOnBottom
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

export const Asides = () => (
  <HStack horizontalAlignment="center">
    <Box
      backgroundColor="red"
      width="100px"
      minWidth="100px"
      maxWidth="calc(50% - 50px)"
      fullHeight
      enableResizeOnRight
    />
    <Spacer width="10px" />
    <Box fillSpace minWidth="100px"></Box>
    <Spacer width="10px" />
    <Box
      backgroundColor="orange"
      width="100px"
      minWidth="100px"
      maxWidth="calc(50% - 50px)"
      fullHeight
      enableResizeOnLeft
    />
  </HStack>
);

export const Simple = () => {
  return (
    <HStack height="auto">
      <button style={{ width: "30%" }}>First</button>
      <Spacer width="10px" />
      <Box fillSpace>
        <input style={{ width: "100%", boxSizing: "border-box" }} />
      </Box>
      <Spacer width="10px" />
      <button>Second</button>
    </HStack>
  );
};

export const Public = () => {
  return (
    <div>
      <script src="test.js"></script>
    </div>
  );
};
