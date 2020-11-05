import React from "react";

// styles
import classes from "./index.module.scss";

const Beer = ({ item }) => {
  return (
    <div className={classes.item}>
      <img className={classes.itemImage} src={item.image_url} alt={item.name} />
      {item.name}
    </div>
  );
};

export default Beer;
