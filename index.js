const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!11111111111111111");
});
app.get("/users", (req, res) => {
  res.send("azad");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
