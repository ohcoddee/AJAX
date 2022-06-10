const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/fetch.html");
});

app.use(express.static(path.join(__dirname, "/")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
