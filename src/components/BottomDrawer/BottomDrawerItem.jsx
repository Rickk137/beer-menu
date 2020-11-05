import { Avatar, Box, IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import {
  useCartDispatch,
  deleteItem,
  increaseItem,
  decreaseItem,
} from "context/cartContext";

import classes from "./BottomDrawerItem.module.scss";

const BottomDrawerItem = ({ item }) => {
  const cartDispatch = useCartDispatch();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Avatar src={item.image_url} />
      <Box>
        <h6 className={`${classes.title} ${classes.collapse}`}>{item.name}</h6>
        <p className={classes.collapse}>{item.description}</p>
      </Box>
      <Box>
        <IconButton aria-label="delete">
          <Add onClick={() => increaseItem(cartDispatch, item)} />
        </IconButton>
        <small>{item.count}</small>
        <IconButton aria-label="delete">
          <Remove onClick={() => decreaseItem(cartDispatch, item)} />
        </IconButton>
      </Box>
      <IconButton
        aria-label="delete"
        onClick={() => deleteItem(cartDispatch, item)}
      >
        <Delete />
      </IconButton>
    </Box>
  );
};

export default BottomDrawerItem;
