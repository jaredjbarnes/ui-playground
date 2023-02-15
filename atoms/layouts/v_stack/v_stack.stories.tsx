import React from "react";
import { Box } from "../box";
import { HStack } from "../h_stack";
import { Spacer } from "../spacer";
import { VStack } from "./index";

export default {
  title: "VStack",
  component: VStack,
};

export const Primary = () => (
  <VStack verticalAlignment="center">
    <Box
      backgroundColor="red"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer height="10px" />
    <Box
      backgroundColor="orange"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer height="10px" />
    <Box
      backgroundColor="yellow"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer height="10px" />
    <Box
      backgroundColor="green"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer height="10px" />
    <Box
      backgroundColor="blue"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer height="10px" />
    <Box
      backgroundColor="magenta"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer height="10px" />
    <Box
      backgroundColor="indigo"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
  </VStack>
);

export const HeaderBodyFooter = () => (
  <VStack verticalAlignment="center">
    <Box
      fullWidth
      enableResizeOnTop
      enableResizeOnBottom
      backgroundColor="red"
      height="20%"
      minHeight="40px"
    >
      <HStack>
        <Spacer width="8px" />
        <Box>Title</Box>
        <Spacer />
        <Box
          borderRadius="50%"
          backgroundColor="white"
          width="20px"
          height="20px"
        />
        <Spacer width="8px" />
      </HStack>
    </Box>
    <Box fillSpace backgroundColor="white" scroll>
      <fieldset>
        <legend>Title</legend>
        webpack built preview 26b37f8164acc71e3394 in 2953ms webpack building...
        webpack built preview 26b37f8164acc71e3394 in 1832ms webpack building...
        webpack built preview ad5a29a07c2825109191 in 2591ms webpack building...
        webpack built preview ae92cb6cdfffd5abe5ee in 3086ms webpack building...
        webpack built preview ae92cb6cdfffd5abe5ee in 2599ms webpack building...
        webpack built preview ae92cb6cdfffd5abe5ee in 2831ms webpack building...
        webpack built preview abf20281884a138c81e1 in 2872ms webpack building...
        webpack built preview ac349cd740c73e8f45ed in 2723ms webpack building...
        webpack built preview efc9c45d8daf58c4ca0c in 2262ms webpack building...
        webpack built preview 0cd9b55ffc1d35c316ce in 1818ms webpack building...
        webpack built preview 4249f20bf181a7af0810 in 2962ms
      </fieldset>
    </Box>
    <Box fullWidth backgroundColor="blue" height="40px" />
  </VStack>
);

export const Example = () => {
  return (
    <VStack>
      <Box height={"30px"} fullWidth background={"grey"}></Box>
      <Box background={"grey"} fillSpace fullWidth>
        <HStack>
          <Box
            background={"white"}
            enableResizeOnRight
            fullHeight
            width="30%"
            scroll
          >
            webpack built preview 26b37f8164acc71e3394 in 2953ms webpack
            building... webpack built preview 26b37f8164acc71e3394 in 1832ms
            webpack building... webpack built preview ad5a29a07c2825109191 in
            2591ms webpack building... webpack built preview
            ae92cb6cdfffd5abe5ee in 3086ms webpack building... webpack built
            preview ae92cb6cdfffd5abe5ee in 2599ms webpack building... webpack
            built preview ae92cb6cdfffd5abe5ee in 2831ms webpack building...
            webpack built preview abf20281884a138c81e1 in 2872ms webpack
            building... webpack built preview ac349cd740c73e8f45ed in 2723ms
            webpack building... webpack built preview efc9c45d8daf58c4ca0c in
            2262ms webpack building... webpack built preview
            0cd9b55ffc1d35c316ce in 1818ms webpack building... webpack built
            preview 4249f20bf181a7af0810 in 2962ms webpack built preview
            26b37f8164acc71e3394 in 2953ms webpack building... webpack built
            preview 26b37f8164acc71e3394 in 1832ms webpack building... webpack
            built preview ad5a29a07c2825109191 in 2591ms webpack building...
            webpack built preview ae92cb6cdfffd5abe5ee in 3086ms webpack
            building... webpack built preview ae92cb6cdfffd5abe5ee in 2599ms
            webpack building... webpack built preview ae92cb6cdfffd5abe5ee in
            2831ms webpack building... webpack built preview
            abf20281884a138c81e1 in 2872ms webpack building... webpack built
            preview ac349cd740c73e8f45ed in 2723ms webpack building... webpack
            built preview efc9c45d8daf58c4ca0c in 2262ms webpack building...
            webpack built preview 0cd9b55ffc1d35c316ce in 1818ms webpack
            building... webpack built preview 4249f20bf181a7af0810 in 2962ms
          </Box>
          <Box background={"white"} fullHeight fillSpace></Box>
        </HStack>
      </Box>
      <Box height={"30px"} background={"grey"} fullWidth></Box>
    </VStack>
  );
};

export const BoxExample = () => {
  return (
    <Box
      background="red"
      width="100px"
      height="100px"
      enableResizeOnBottom
      enableResizeOnRight
    />
  );
};

export const IntrinsicHeight = () => {
  return (
    <>
      <VStack as="button" inline height="100px" width="100px">
        <span>Hello</span>
        <Spacer height="10px" />
        <span>World</span>
      </VStack>
      <VStack as="button" inline height="100px" width="100px">
        <span>Hello</span>
        <Spacer height="10px" />
        <span>World</span>
      </VStack>
    </>
  );
};
