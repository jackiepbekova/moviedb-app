import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Box, makeStyles } from "@material-ui/core";
import { fetchItemsPageData } from "../utils/FetchData";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    margin: "20px 20px",
    justifyContent: "center",
  },
  item: {
    flex: "0 1",
  },
});

const ItemList = ({ itemType, listType, match, history }) => {
  const classes = useStyles();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItemsPageData(itemType, listType)
      .then((response) => {
        setItems(
          [...response.data.results].slice(0, 6).map((item) => ({
            id: item.id,
            title: item.title || item.name,
            poster: item.poster_path,
          }))
        );
      })
      .catch((error) => {
        throw error;
      });
  }, [itemType, listType]);

  return (
    <Box className={classes.box}>
      {items.map((item) => (
        <CardItem
          className={classes.item}
          key={item.id}
          id={item.id}
          match={match}
          history={history}
          title={item.title}
          poster={item.poster}
        />
      ))}
    </Box>
  );
};

export default ItemList;

ItemList.propTypes = {
  itemType: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
};
