import React from "react";
import { Box } from "../box";
import { Grid } from "./index";

export default {
  title: "Grid",
  component: Grid,
};

export function GridExample() {
  return (
    <Grid columnWidth={200} gap={20}>
      <Box background="red" width="100%" height="100px" enableResizeOnBottom></Box>
      <Box background="orange" width="100%" height="200px" enableResizeOnBottom></Box>
      <Box background="teal" width="100%" height="auto" padding={"10px"}>
        Here is some auto height, I don't know if this will work, but lets find
        out.
      </Box>
      <Box background="blue" width="100%" height="50px"></Box>
      <Box background="pink" width="100%" height="75px"></Box>
      <Box background="green" width="100%" height="150px"></Box>
      <Box background="purple" width="100%" height="300px"></Box>
    </Grid>
  );
}
