import React, { useEffect, useState } from "react";
import fetchData from "../general/FetchData";
import SeriesItemList from "./SeriesItemList";

const TopRatedSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchData("tv", "top_rated")
      .then((response) => {
        setSeries([...response.data.results]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return <SeriesItemList data={series} />;
};

export default TopRatedSeries;
