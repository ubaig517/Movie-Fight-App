// OMDB endpoint = 'http://www.omdbapi.com/?apikey=18ab37d0&'
// OMDB API Key = '18ab37d0'

const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "18ab37d0",
      i: "tt0848228",
    },
  });
  console.log(response.data);
};

fetchData();
