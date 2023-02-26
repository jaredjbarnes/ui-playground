import React, { useState } from "react";
import { Box } from "../box";
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
      <img
        src={`https://picsum.photos/${width}/${height}`}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
});

export function GridExample() {
  return (
    <Grid columnWidth={200} gap={20}>
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
