import { Box } from "@material-ui/core";
import React from "react";

const BottomDrawerTotal = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      padding="20px 0"
    >
      <span>Total:</span>
      <strong>28$</strong>
    </Box>
  );
};

export default BottomDrawerTotal;
