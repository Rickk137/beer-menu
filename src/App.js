import React, { useState } from "react";

import { useCartState } from "context/cartContext";

import Items from "components/Items";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import MoreIcon from "@material-ui/icons/More";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {
  const state = useCartState();

  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("state:", state);
  return (
    <div className="container">
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<LocalCafeIcon />} />
          <Tab icon={<LocalDiningIcon />} />
          <Tab icon={<MoreIcon />} />
        </Tabs>

        <Items />
      </Paper>
    </div>
  );
}

export default App;
