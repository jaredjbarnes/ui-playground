import React from "react";
import { Box } from "./box";
import { HStack } from "./h_stack";
import { Spacer } from "./spacer";
import { VStack } from "./v_stack";
import { ZStack } from "./z_stack";
import "../theme/xp_design_system.css";

export default {
  title: "ZStack",
  component: ZStack,
};

export const Example = () => {
  return (
    <ZStack verticalAlignment="end">
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
        src="https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      />
      <Box opacity={0.5} height="25%" background="white" fullWidth>
        <HStack>
          <Spacer width="10%" />
          <VStack
            horizontalAlignment="start"
            width="50%"
            verticalAlignment="center"
          >
            <span style={{ fontSize: "8vh" }}>Frog</span>
            <span style={{ fontSize: "2vh" }}>
              A frog is any member of a diverse and largely carnivorous group of
              short-bodied, tailless amphibians composing the order Anura[1]
              (ανοὐρά, literally without tail in Ancient Greek).
            </span>
          </VStack>
          <Spacer />
        </HStack>
      </Box>
    </ZStack>
  );
};