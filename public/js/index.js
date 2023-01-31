// const fetch = require('node-fetch');
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0f00cbf66emshdf2bcb63e49f39cp179d81jsnbb95e24d5dcc',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

$(document).on("click", "drop-btn", () => {
  $(".dropdown-menu").dropdown()
})

$(".muscle").on("click", (e) => {
  let muscle = e.target.id
  let url = `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`;

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
})

$(".bp").on("click", (e) => {
  let bp = e.target.id
  console.log(e.target.id)
  let url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bp}`;

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
})

const randomquote = Math.floor(Math.random() * 1600)

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    $("#quote").html(
      `${data[randomquote].text}
    -${data[randomquote].author}`
    );
  });
