import React from "react";
import { Spacer } from "../spacer";
import { Box } from "../box";
import { HStack } from "./index";

export default {
  title: "HStack",
  component: HStack,
};

export const AsExample = () => {
  return (
    <HStack height="auto">
      <input id="1" type="radio" checked name="First" />
      <Box fillSpace as="label">
        First
      </Box>
    </HStack>
  );
};
