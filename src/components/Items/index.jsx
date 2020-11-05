import React, { useEffect, useState } from "react";

// components
import Box from "@material-ui/core/Box";
import Beer from "../Beer";
import Loading from "../Loading";
import BearModal from "./BearModal";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

// styles
import styles from "./index.module.scss";

import { getBeers } from "../../services/apiService";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Items = () => {
  const [item, setItem] = useState({});
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");

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

  const sortItems = async (sort) => {
    setSort(sort);
    let newItems = [...list];
    newItems.sort((a, b) => {
      if (sort === "") return a.id - b.id;
      if (sort === "abv_ascending") return a.abv - b.abv;
      if (sort === "abv_descending") return b.abv - a.abv;
      if (sort === "name_ascending" || sort === "name_descending") {
        if (a.name < b.name) {
          return sort === "name_ascending" ? -1 : 1;
        }
        if (a.name >= b.name) {
          return sort === "name_ascending" ? 1 : -1;
        }
      }
      return 1;
    });
    setList(newItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  const onClick = (item) => {
    setItem(item);
    setOpen(true);
  };

  return (
    <Box p={1}>
      <BearModal item={item} open={open} handleClose={() => setOpen(false)} />
      {!loading && (
        <FormControl className={classes.formControl}>
          <Select
            value={sort}
            onChange={(e) => sortItems(e.target.value)}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"abv_ascending"}>Abv Ascending</MenuItem>
            <MenuItem value={"abv_descending"}>Abv Descending</MenuItem>
            <MenuItem value={"name_ascending"}>Name Ascending</MenuItem>
            <MenuItem value={"name_descending"}>Name Descending</MenuItem>
          </Select>
        </FormControl>
      )}
      <Box
        className={styles.wrapper}
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        {list.map((item) => (
          <Beer onClick={onClick} item={item} key={item.id} />
        ))}

        {loading && (
          <div className={classes.loading}>
            <Loading />
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Items;
