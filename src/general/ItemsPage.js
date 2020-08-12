import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SectionTitle from "./SectionTitle";
import ItemList from "./ItemList";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  section: {
    textAlign: "center",
  },
});

const ItemsPage = ({ itemType, match, history }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.section}>
        <SectionTitle sectionName="Popular" />
        <ItemList
          itemType={itemType}
          listType="popular"
          match={match}
          history={history}
        />
      </div>
      <div className={classes.section}>
        <SectionTitle sectionName="Top Rated" />
        <ItemList
          itemType={itemType}
          listType="top_rated"
          match={match}
          history={history}
        />
      </div>
    </div>
  );
};

export default ItemsPage;

ItemsPage.propTypes = {
  itemType: PropTypes.string.isRequired,
};
