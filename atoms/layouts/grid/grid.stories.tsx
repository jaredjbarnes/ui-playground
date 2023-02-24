import React from "react";
import { Box } from "../box";
import { Grid } from "./index";

export default {
  title: "Grid",
  component: Grid,
};

export function GridExample() {
  return (
    <Grid minColumnWidth="200px">
      <Box background="red" width="100%" height="100px"></Box>
      <Box background="orange" width="100%" height="200px"></Box>
      <Box background="blue" width="100%" height="50px"></Box>
      <Box background="pink" width="100%" height="50px"></Box>
    </Grid>
  );
}
