// data/fetchTrending.js

import axios from "axios";

export async function fetchTrendingData() {
  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/v2/trending",
    headers: {
      "x-rapidapi-key": "176469d2e5mshcbf6debb669bb00p103f73jsn32b16230279d",
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.list;
  } catch (error) {
    console.error("Error fetching trending data:", error);
    return [];
  }
}
