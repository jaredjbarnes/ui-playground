import React, { useState } from "react";
import { Box } from "../box";
import { FlexBox } from "../flex_box";
import { Grid } from "../grid";
import { HStack } from "../h_stack";
import { Spacer } from "../spacer";
import { VStack } from "./index";

export default {
  title: "VStack",
  component: VStack,
};

export const Primary = () => (
  <VStack verticalAlignment="center">
    <Box background="red" borderRadius="10px" width="100px" height="100px" />
    <Spacer height="10px" />
    <Box background="orange" borderRadius="10px" width="100px" height="100px" />
    <Spacer height="10px" />
    <Box background="yellow" borderRadius="10px" width="100px" height="100px" />
    <Spacer height="10px" />
    <Box background="green" borderRadius="10px" width="100px" height="100px" />
    <Spacer height="10px" />
    <Box background="blue" borderRadius="10px" width="100px" height="100px" />
    <Spacer height="10px" />
    <Box
      background="magenta"
      borderRadius="10px"
      width="100px"
      height="100px"
    />
    <Spacer height="10px" />
    <Box background="indigo" borderRadius="10px" width="100px" height="100px" />
  </VStack>
);

export function HeaderBodyFooter() {
  return (
    <VStack verticalAlignment="center">
      <Box
        fullWidth
        enableResizeOnTop
        enableResizeOnBottom
        background="red"
        height="20%"
        minHeight="40px"
      >
        <HStack>
          <Spacer width="8px" />
          <Box>Title</Box>
          <Spacer />
          <Box
            borderRadius="50%"
            background="white"
            width="20px"
            height="20px"
          />
          <Spacer width="8px" />
        </HStack>
      </Box>
      <FlexBox>
        <fieldset>
          <legend>Title</legend>
          webpack built preview 26b37f8164acc71e3394 in 2953ms webpack
          building... webpack built preview 26b37f8164acc71e3394 in 1832ms
          webpack building... webpack built preview ad5a29a07c2825109191 in
          2591ms webpack building... webpack built preview ae92cb6cdfffd5abe5ee
          in 3086ms webpack building... webpack built preview
          ae92cb6cdfffd5abe5ee in 2599ms webpack building... webpack built
          preview ae92cb6cdfffd5abe5ee in 2831ms webpack building... webpack
          built preview abf20281884a138c81e1 in 2872ms webpack building...
          webpack built preview ac349cd740c73e8f45ed in 2723ms webpack
          building... webpack built preview efc9c45d8daf58c4ca0c in 2262ms
          webpack building... webpack built preview 0cd9b55ffc1d35c316ce in
          1818ms webpack building... webpack built preview 4249f20bf181a7af0810
          in 2962ms
        </fieldset>
      </FlexBox>
      <Box fullWidth background="blue" height="40px" />
    </VStack>
  );
}

export function Example() {
  const [sizes] = useState(() => [200, 400, 600]);
  const [currentSizeIndex, setSizeIndex] = useState(0);
  const size = sizes[currentSizeIndex];

  function toggleSize() {
    const index = (currentSizeIndex + 1) % sizes.length;
    setSizeIndex(index);
  }

  return (
    <VStack>
      <HStack height="30px">
        <button onClick={toggleSize}>Toggle Size</button>
      </HStack>
      <FlexBox>
        <HStack>
          <Box
            background={"white"}
            enableResizeOnRight
            fullHeight
            width={`${size}px`}
            scroll
            zIndex={2}
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
          <FlexBox background={"grey"} zIndex={1}>
            <Grid columnWidth={200} gap={10} animate>
              <Box
                background="red"
                width="100%"
                height="100px"
                enableResizeOnBottom
              >
                1
              </Box>
              <Box
                background="orange"
                width="100%"
                height="200px"
                enableResizeOnBottom
              >
                2
              </Box>
              <Box
                background="teal"
                width="100%"
                height="auto"
                padding={"10px"}
              >
                3 -- Here is some auto height, I don't know if this will work,
                but lets find out.
              </Box>
              <Box background="blue" width="100%" height="50px">
                4
              </Box>
              <Box background="pink" width="100%" height="75px">
                5
              </Box>
              <Box background="green" width="100%" height="150px">
                6
              </Box>
              <Box background="purple" width="100%" height="300px">
                7
              </Box>
              <Box
                background="red"
                width="100%"
                height="100px"
                enableResizeOnBottom
              >
                8
              </Box>
              <Box
                background="orange"
                width="100%"
                height="200px"
                enableResizeOnBottom
              >
                9
              </Box>
              <Box
                background="teal"
                width="100%"
                height="auto"
                padding={"10px"}
              >
                10 -- Here is some auto height, I don't know if this will work,
                but lets find out.
              </Box>
              <Box background="blue" width="100%" height="50px">
                11
              </Box>
              <Box background="pink" width="100%" height="75px">
                12
              </Box>
              <Box background="green" width="100%" height="150px">
                13
              </Box>
              <Box background="purple" width="100%" height="300px">
                14
              </Box>
              <Box
                background="red"
                width="100%"
                height="100px"
                enableResizeOnBottom
              >
                1
              </Box>
              <Box
                background="orange"
                width="100%"
                height="200px"
                enableResizeOnBottom
              >
                2
              </Box>
              <Box
                background="teal"
                width="100%"
                height="auto"
                padding={"10px"}
              >
                3 -- Here is some auto height, I don't know if this will work,
                but lets find out.
              </Box>
              <Box background="blue" width="100%" height="50px">
                4
              </Box>
              <Box background="pink" width="100%" height="75px">
                5
              </Box>
              <Box background="green" width="100%" height="150px">
                6
              </Box>
              <Box background="purple" width="100%" height="300px">
                7
              </Box>
              <Box
                background="red"
                width="100%"
                height="100px"
                enableResizeOnBottom
              >
                8
              </Box>
              <Box
                background="orange"
                width="100%"
                height="200px"
                enableResizeOnBottom
              >
                9
              </Box>
              <Box
                background="teal"
                width="100%"
                height="auto"
                padding={"10px"}
              >
                10 -- Here is some auto height, I don't know if this will work,
                but lets find out.
              </Box>
              <Box background="blue" width="100%" height="50px">
                11
              </Box>
              <Box background="pink" width="100%" height="75px">
                12
              </Box>
              <Box background="green" width="100%" height="150px">
                13
              </Box>
              <Box background="purple" width="100%" height="300px">
                14
              </Box>
              <Box
                background="red"
                width="100%"
                height="100px"
                enableResizeOnBottom
              >
                1
              </Box>
              <Box
                background="orange"
                width="100%"
                height="200px"
                enableResizeOnBottom
              >
                2
              </Box>
              <Box
                background="teal"
                width="100%"
                height="auto"
                padding={"10px"}
              >
                3 -- Here is some auto height, I don't know if this will work,
                but lets find out.
              </Box>
              <Box background="blue" width="100%" height="50px">
                4
              </Box>
              <Box background="pink" width="100%" height="75px">
                5
              </Box>
              <Box background="green" width="100%" height="150px">
                6
              </Box>
              <Box background="purple" width="100%" height="300px">
                7
              </Box>
              <Box
                background="red"
                width="100%"
                height="100px"
                enableResizeOnBottom
              >
                8
              </Box>
              <Box
                background="orange"
                width="100%"
                height="200px"
                enableResizeOnBottom
              >
                9
              </Box>
              <Box
                background="teal"
                width="100%"
                height="auto"
                padding={"10px"}
              >
                10 -- Here is some auto height, I don't know if this will work,
                but lets find out.
              </Box>
              <Box background="blue" width="100%" height="50px">
                11
              </Box>
              <Box background="pink" width="100%" height="75px">
                12
              </Box>
              <Box background="green" width="100%" height="150px">
                13
              </Box>
              <Box background="purple" width="100%" height="300px">
                14
              </Box>
              <Box
                background="red"
                width="100%"
                height="100px"
                enableResizeOnBottom
              >
                1
              </Box>
              <Box
                background="orange"
                width="100%"
                height="200px"
                enableResizeOnBottom
              >
                2
              </Box>
              <Box
                background="teal"
                width="100%"
                height="auto"
                padding={"10px"}
              >
                3 -- Here is some auto height, I don't know if this will work,
                but lets find out.
              </Box>
              <Box background="blue" width="100%" height="50px">
                4
              </Box>
              <Box background="pink" width="100%" height="75px">
                5
              </Box>
              <Box background="green" width="100%" height="150px">
                6
              </Box>
              <Box background="purple" width="100%" height="300px">
                7
              </Box>
              <Box
                background="red"
                width="100%"
                height="100px"
                enableResizeOnBottom
              >
                8
              </Box>
              <Box
                background="orange"
                width="100%"
                height="200px"
                enableResizeOnBottom
              >
                9
              </Box>
              <Box
                background="teal"
                width="100%"
                height="auto"
                padding={"10px"}
              >
                10 -- Here is some auto height, I don't know if this will work,
                but lets find out.
              </Box>
              <Box background="blue" width="100%" height="50px">
                11
              </Box>
              <Box background="pink" width="100%" height="75px">
                12
              </Box>
              <Box background="green" width="100%" height="150px">
                13
              </Box>
              <Box background="purple" width="100%" height="300px">
                14
              </Box>
            </Grid>
          </FlexBox>
        </HStack>
      </FlexBox>
      <Box height={"30px"} minHeight="30px" background={"grey"} fullWidth></Box>
    </VStack>
  );
}

export function BoxExample() {
  return (
    <Box
      background="red"
      width="100px"
      height="100px"
      enableResizeOnBottom
      enableResizeOnRight
    />
  );
}

export function IntrinsicHeight() {
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
}
