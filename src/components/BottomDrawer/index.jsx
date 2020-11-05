import React from "react";
import { Button, SwipeableDrawer, Box } from "@material-ui/core";

import { useCart, toggleDrawer } from "context/cartContext";

import BottomDrawerItem from "./BottomDrawerItem";
import BottomDrawerTotal from "./BottomDrawerTotal";

import classes from "./index.module.scss";

const BottomDrawer = () => {
  const [cartState, cartDispatch] = useCart();

  return (
    <SwipeableDrawer
      anchor={"bottom"}
      open={cartState.active}
      onClose={() => toggleDrawer(cartDispatch)}
      onOpen={() => toggleDrawer(cartDispatch)}
      classes={{ paper: classes.drawer }}
    >
      <Box className={classes.itemsWrapper}>
        {cartState.items.map((item) => (
          <BottomDrawerItem item={item} key={item.id} />
        ))}
      </Box>
      <BottomDrawerTotal />
      <Button variant="contained" color="primary">
        Confirm Payment
      </Button>
    </SwipeableDrawer>
  );
};

export default BottomDrawer;
