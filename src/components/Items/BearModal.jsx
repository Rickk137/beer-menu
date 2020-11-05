import React from "react";
import { Box, Modal, Paper, Button } from "@material-ui/core";
import classes from "./BearModal.module.scss";
import { toggleDrawer, useCartDispatch, createItem } from "context/cartContext";

const BearModal = ({ open, handleClose, item }) => {
  const cartDispatch = useCartDispatch();

  const handleAdd = () => {
    handleClose();
    createItem(cartDispatch, item);
    toggleDrawer(cartDispatch);
  };

  return (
    <Modal className={classes.container} open={open} onClose={handleClose}>
      <Paper className={classes.wrapper}>
        <Box display="flex" justifyContent="space-around">
          <Box>
            <h4>{item.name}</h4>
            <p>{item.tagline}</p>
            <p>{item.abv}$</p>
            <p className={classes.collapse}>{item.description}</p>
            <p className={classes.collapse}>{item.food_pairing}</p>
          </Box>
          <img
            className={classes.itemImage}
            src={item.image_url}
            alt={item.name}
          />
        </Box>
        <Button
          onClick={handleAdd}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Add to Cart
        </Button>
      </Paper>
    </Modal>
  );
};

export default BearModal;
