import React from "react";
import { Box } from "./box";
import { Grid } from "./grid";

export default {
  title: "Grid",
  component: Grid,
};

export function GridExample() {
  return (
    <Grid spacing="10px" minWidth="100px">
      <Box width="100%" height="100%" background="red" />
      <Box width="100%" height="100%" background="orange" />
      <Box width="100%" height="100%" background="yellow" />
      <Box
        width="100%"
        height="100%"
        background="green"
        style={{ gridColumn: "auto / span 2", gridRow: " auto / span 2" }}
      />
      <Box width="100%" height="100%" background="blue" />
      <Box width="100%" height="100%" background="violet" />
    </Grid>
  );
}
