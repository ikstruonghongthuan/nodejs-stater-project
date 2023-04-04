const express = require("express");
const app = express();
const port = 9000;

const SERVER_MESSAGE = "IKStruonghongthuan Server";

app.get("/", (req, res) => {
  res.send(SERVER_MESSAGE);
});

app.listen(port, () => {
  console.log(`${SERVER_MESSAGE} listening on port ${port}`);
});
