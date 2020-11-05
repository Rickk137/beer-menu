import React, { useState } from "react";

import Items from "components/Items";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import MoreIcon from "@material-ui/icons/More";
import BottomDrawer from "components/BottomDrawer/index";

import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import SwipeableViews from "react-swipeable-views";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 0,
  },
});

function App() {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
          <Tab icon={<LocalCafeIcon />} label="ALL" />
          <Tab icon={<LocalDiningIcon />} label="PIZZA" />
          <Tab icon={<MoreIcon />} label="STEAK" />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Items food={""} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Items food={"pizza"} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Items food={"steak"} />
          </TabPanel>
        </SwipeableViews>
      </Paper>
      <BottomDrawer />
    </div>
  );
}

export default App;
