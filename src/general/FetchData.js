import axios from "axios";

const fetchData = (dataType, listType) => {
  return axios.get(
    `https://api.themoviedb.org/3/${dataType}/${listType}?api_key=88f6fcb1ebcfaf930f6a2e2cd48b2125&language=en-US`
  );
};

export default fetchData;
