import React, { useState } from "react";
import { Button, SwipeableDrawer } from "@material-ui/core";

import { useCart, toggleDrawer } from "context/cartContext";

import BottomDrawerItem from "./BottomDrawerItem";
import BottomDrawerTotal from "./BottomDrawerTotal";

import classes from "./index.module.scss";

const BottomDrawer = () => {
  const [cartState, cartDispatch] = useCart();

  const [items, setItems] = useState([
    {
      name: "Bear",
      count: 2,
      description: "hello dude how are u?",
    },
    {
      name: "Bear 2",
      count: 3,
      description: "hello dude how are u?",
    },
  ]);

  return (
    <SwipeableDrawer
      anchor={"bottom"}
      open={cartState.active}
      onClose={() => toggleDrawer(cartDispatch)}
      onOpen={() => toggleDrawer(cartDispatch)}
      classes={{ paper: classes.drawer }}
    >
      {items.map((item) => (
        <BottomDrawerItem item={item} />
      ))}
      <BottomDrawerTotal />
      <Button variant="contained" color="primary">
        Confirm Payment
      </Button>
    </SwipeableDrawer>
  );
};

export default BottomDrawer;
