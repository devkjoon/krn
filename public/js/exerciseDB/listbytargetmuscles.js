const fetch = require("node-fetch");

const url = "https://exercisedb.p.rapidapi.com/exercises/targetList";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0f00cbf66emshdf2bcb63e49f39cp179d81jsnbb95e24d5dcc",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
