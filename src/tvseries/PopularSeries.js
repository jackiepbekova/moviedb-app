import React, { useEffect, useState } from "react";
import fetchData from "../general/FetchData";
import SeriesItemList from "./SeriesItemList";

const PopularSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchData("tv", "popular")
      .then((response) => {
        setSeries([...response.data.results]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  console.log(series);

  return <SeriesItemList data={series} />;
};

export default PopularSeries;
