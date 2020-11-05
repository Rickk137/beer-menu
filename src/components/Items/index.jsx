import React, { useEffect, useState } from "react";

// components
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Beer from "../Beer";

// styles
import classes from "./index.module.scss";

import { getBeers } from "../../services/apiService";

const Items = () => {
  const [list, setList] = useState([]);
  const getItems = async () => {
    const { data } = await getBeers();
    setList(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Box
      className={classes.wrapper}
      display="flex"
      justifyContent="space-around"
      p={1}
    >
      {list.map((item) => (
        <Beer item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Items;
