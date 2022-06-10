const nightDay = document.querySelector(".night_day");

const htmlList = document.querySelector(".html-list");
const cssList = document.querySelector(".css-list");
const jsList = document.querySelector(".javascript-list");

// const article = document.querySelector("article");

// htmlList.addEventListener("click", () => {
//   fetch("html")
//     .then((response) => response.text)
//     .then((text) => {
//       document.querySelector("article").innerHTML = "<h2>HTML</h2>HTML is...";
//     });
// });

// cssList.addEventListener("click", () => {
//   fetch("css")
//     .then((response) => response.text)
//     .then((text) => {
//       console.log(text);
//       document.querySelector("article").innerHTML = text;
//     });
// });

// jsList.addEventListener("click", () => {
//   fetch("javascript")
//     .then((response) => response.text)
//     .then((text) => {
//       document.querySelector("article").innerHTML = text;
//     });
// });

const Links = {
  setColor: function (color) {
    // const alist = document.querySelectorAll('a');
    // const i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $("a").css("color", color);
  },
};
const body = {
  setColor: function (color) {
    //document.querySelector('body').style.color = color;
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};

nightDay.addEventListener("click", (event) => {
  const self = event.target;

  if (self.value === "night") {
    body.setBackgroundColor("black");
    body.setColor("white");
    self.value = "day";

    Links.setColor("white");
  } else {
    body.setBackgroundColor("white");
    body.setColor("black");
    self.value = "night";

    Links.setColor("blue");
  }
});

function nightDayHandler(self) {
  // const target = document.querySelector("body");
  if (self.value === "night") {
    body.setBackgroundColor("black");
    body.setColor("white");
    self.value = "day";

    Links.setColor("white");
  } else {
    body.setBackgroundColor("white");
    body.setColor("black");
    self.value = "night";

    Links.setColor("blue");
  }
}
