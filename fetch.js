const input = document.querySelector(".input");

input.addEventListener("click", () => {
  fetch("css")
    .then((response) => response.text)
    .then((text) => {
      document.querySelector("article").innerHTML = text;
    });
});

onclick =
  "fetch('css').then(function(response){response.text().then(function(text){document.querySelector('article').innerHTML = text;})})";
