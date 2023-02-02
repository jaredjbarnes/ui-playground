import React from "react";
import { Box } from "./box";
import { HStack } from "./h_stack";
import { Spacer } from "./spacer";
import { VStack } from "./v_stack";

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
      <HStack fullHeight>
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

export const BenExample = () => {
  return (
    <VStack fullWidth>
      <Box
        backgroundColor={"grey"}
        height="20px"
        fullWidth
        enableResizeOnBottom
      ></Box>
      <Box backgroundColor={"grey"} fillSpace fullWidth>
        <HStack fullHeight>
          <Box
            width="30%"
            enableResizeOnRight
            fullHeight
            scroll
            backgroundColor={"white"}
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
            preview 4249f20bf181a7af0810 in 2962ms
          </Box>
          <Spacer width="5px" />
          <Box fullHeight fillSpace backgroundColor={"white"}></Box>
        </HStack>
      </Box>
      <Box backgroundColor={"grey"} height="30px" fullWidth>
        <HStack horizontalAlignment="start" fullHeight>
          <Spacer width="10px" />
          <span>Title</span>
          <input style={{ width: "400px" }} />
          <button disabled>Find</button>
          <Spacer width="10px" />
          <button>Close Find</button>
        </HStack>
      </Box>
    </VStack>
  );
};
