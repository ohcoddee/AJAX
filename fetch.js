const nightDay = document.querySelector(".night_day");
const indexList = document.querySelector("#index-list");
const htmlList = document.querySelector(".html-list");
const cssList = document.querySelector(".css-list");
const jsList = document.querySelector(".javascript-list");

function fetchFunction(name) {
  fetch(name).then((response) => {
    response.text().then((text) => {
      document.querySelector("article").innerHTML = text;
    })
  });
}

fetch("list").then((response) => {
  response.text().then((text) => {
    const commaSplit = text.split(",");
    let blank = "";
    for (let i = 0; i < commaSplit.length; i++) {
      const item = commaSplit[i];
      // const listTag = '<li><a href="#!' + item + '" onclick="">' + item + '</a></li>';
      const listTag = `<li><a href="#!${item}" onclick="fetchFunction('${item}')">${item}</a></li>`
      blank = blank + listTag;
    }
    indexList.innerHTML = blank;
  })
});

// fetchFunction(\'' + item + '\')

if (location.hash) {
  fetchFunction(location.hash.substring(2));
  //substring: 문자 중 일부를 떼네고 싶을 때 String.prototype.substring()
} else {
  fetchFunction("welcome");
}

const Links = {
  setColor: function (color) {
    $("a").css("color", color);
  },
};
const body = {
  setColor: function (color) {
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
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


