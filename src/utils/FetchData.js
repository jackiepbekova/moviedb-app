import axios from "axios";

export const fetchItemsPageData = (dataType, listType) => {
  return axios.get(
    `https://api.themoviedb.org/3/${dataType}/${listType}?api_key=88f6fcb1ebcfaf930f6a2e2cd48b2125&language=en-US`
  );
};

export const fetchSingleItemData = (dataType, id) => {
  return axios.get(
    `https://api.themoviedb.org/3/${dataType}/${id}?api_key=88f6fcb1ebcfaf930f6a2e2cd48b2125&language=en-US`
  );
};
