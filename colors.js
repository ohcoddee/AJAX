const nightDay = document.querySelector(".night_day");

const htmlList = document.querySelector(".html-list");
const cssList = document.querySelector(".css-list");
const jsList = document.querySelector(".javascript-list");
// const htmlList = document.querySelector(".html-list");
// const cssList = document.querySelector(".css-list");
// const jsList = document.querySelector(".javascript-list");

htmlList.addEventListener("click", () => {
  document.querySelector("article").innerHTML = "<h2>HTML</h2>HTML is...";
});

cssList.addEventListener("click", () => {
  document.querySelector("article").innerHTML = "<h2>CSS</h2>CSS is...";
});

jsList.addEventListener("click", () => {
  document.querySelector("article").innerHTML =
    "<h2>JavaScript</h2>JavaScript is...";
});

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
const Body = {
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
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";

    Links.setColor("white");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";

    Links.setColor("blue");
  }
});

function nightDayHandler(self) {
  // const target = document.querySelector("body");
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";

    Links.setColor("white");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";

    Links.setColor("blue");
  }
}
