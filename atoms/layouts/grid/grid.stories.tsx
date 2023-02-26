import React, { useState } from "react";
import { Box } from "../box";
import { FlexBox } from "../flex_box";
import { HStack } from "../h_stack";
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

const buttonStyle = {
  backgroundColor: "rgba(255,255,255,0.8)",
  borderRadius: "15px",
  height: "30px",
  border: "0",
};

const Card = React.forwardRef(function Image(
  { style, className }: ImageProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const [isHovering, setIsHovering] = useState(false);
  const [width] = useState(() => {
    return Math.floor(200 + Math.random() * 200);
  });
  const [height] = useState(() => {
    return Math.floor(200 + Math.random() * 200);
  });

  function enter() {
    setIsHovering(true);
  }

  function leave() {
    setIsHovering(false);
  }

  return (
    <Box
      ref={ref}
      borderRadius="20px"
      boxShadow="0px 5px 15px rgba(0,0,0,0.25)"
      background="white"
      width="100%"
      height={`${height}px`}
      style={style}
      className={className}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <ZStack>
        <img
          src={`https://picsum.photos/${width}/${height}`}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        {isHovering && (
          <VStack>
            <Box height="50px" fullWidth />
            <Spacer />
            <HStack height="50px">
              <Spacer width="15px" />
              <button style={buttonStyle}>Name</button>
              <Spacer />
              <button style={buttonStyle}>o</button>
              <Spacer width="15px" />
              <button style={buttonStyle}>o</button>
              <Spacer width="15px" />
            </HStack>
          </VStack>
        )}
      </ZStack>
    </Box>
  );
});

export function GridExample() {
  return (
    <Grid columnWidth={200} gap={20} animate>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}
