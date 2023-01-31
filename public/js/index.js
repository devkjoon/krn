$(document).on("click", "drop-btn", () => {
  $(".dropdown-menu").dropdown();
});

$(".muscle").on("click", () => {
  let muscle = $(this).attr("id");
});

$(".bp").on("click", () => {
  let bp = $(this).attr("id");
});

const randomquote = Math.floor(Math.random() * 1600);

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
