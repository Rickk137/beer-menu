import { Avatar, Box, IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";

import classes from "./BottomDrawerItem.module.scss";

const BottomDrawerItem = ({ item }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Avatar>H</Avatar>
      <Box>
        <h6 className={classes.title}>{item.name}</h6>
        <small>{item.description}</small>
      </Box>
      <Box>
        <IconButton aria-label="delete">
          <Add />
        </IconButton>
        <small>{item.count}</small>
        <IconButton aria-label="delete">
          <Remove />
        </IconButton>
      </Box>
      <IconButton aria-label="delete">
        <Delete />
      </IconButton>
    </Box>
  );
};

export default BottomDrawerItem;
