const express = require("express");
var cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
const users = [
  { id: 1, name: "azad111111111", phone: "998877" },
  { id: 2, name: "azad222222222", phone: "998877" },
  { id: 3, name: "azad333333333", phone: "998877" },
  { id: 4, name: "azad344444444", phone: "998877" },
];

app.get("/", (req, res) => {
  res.send("Hello World!11111111111111111");
});

// app.get("/users", (req, res) => {
//   const search = req.query.search;
//   if (search) {
//     const searchResult = users.filter((user) =>
//       user.name.toLocaleLowerCase().includes(search)
//     );
//     res.send(searchResult);
//   }
// });

app.get("/users", (req, res) => {
  res.send(users);
});

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users[id];
//   res.send(user);
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
