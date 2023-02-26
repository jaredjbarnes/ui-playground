import React, { useState } from "react";
import { Box } from "../box";
import { FlexBox } from "../flex_box";
import { Spacer } from "../spacer";
import { VStack } from "../v_stack";
import { ZStack } from "../z_stack";
import { Grid } from "./index";

export default {
  title: "Grid",
  component: Grid,
};

interface ImageProps {
  style?: React.CSSProperties;
  className?: string;
}

const Image = React.forwardRef(function Image(
  { style, className }: ImageProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const [width] = useState(() => {
    return Math.floor(200 + Math.random() * 200);
  });
  const [height] = useState(() => {
    return Math.floor(200 + Math.random() * 200);
  });

  return (
    <Box
      ref={ref}
      borderRadius="30px"
      boxShadow="0px 5px 15px rgba(0,0,0,0.25)"
      width="100%"
      height={height}
      style={style}
      className={className}
    >
      <ZStack>
        <VStack>
          <Box height="50px" fullWidth />
          <FlexBox>
            <img
              src={`https://picsum.photos/${width}/${height}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </FlexBox>
          <Box height="100px" backgroundColor="white" fullWidth opacity={0.5} />
        </VStack>
      </ZStack>
    </Box>
  );
});

export function GridExample() {
  return (
    <Grid columnWidth={200} gap={20} animate>
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </Grid>
  );
}
