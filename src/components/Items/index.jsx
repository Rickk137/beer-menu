import React, { useEffect, useState } from "react";

// components
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Beer from "../Beer";
import Loading from "../Loading";

// styles
import classes from "./index.module.scss";

import { getBeers } from "../../services/apiService";

const Items = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getItems = async () => {
    setLoading(true);
    try {
      const { data } = await getBeers();
      setList(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
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
      {loading && (
        <div className={classes.loading}>
          <Loading />
        </div>
      )}
      {list.map((item) => (
        <Beer item={item} key={item.id} />
      ))}
    </Box>
  );
};

export default Items;
