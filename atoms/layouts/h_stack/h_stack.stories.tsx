import React from "react";
import { HStack } from "./index";
import { Spacer } from "../spacer";

export default {
  title: "HStack",
  component: HStack,
};

export function AsExample() {
  return (
    <HStack height="40px">
      <input id="1" type="radio" defaultChecked name="First" style={{marginTop: 0}} />
      <Spacer width="8px" />
      <span>First</span>
      <Spacer />
    </HStack>
  );
}
