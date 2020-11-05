import React, { useMemo } from "react";
import { Box } from "@material-ui/core";
import { useCartState } from "context/cartContext";

const BottomDrawerTotal = () => {
  const cartState = useCartState();

  const total = useMemo(
    () => cartState.items.reduce((acc, cur) => (acc += cur.abv * cur.count), 0),
    [cartState]
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      padding="20px 0"
    >
      <span>Total:</span>
      <strong>{total.toFixed(2)}$</strong>
    </Box>
  );
};

export default BottomDrawerTotal;
