const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
require('dotenv').config();
const PORT = process.env.PORT||3000
app.use(
  express.static(__dirname + "/public", {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d",
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
// router.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname + "/index.html"));
//   //__dirname : It will resolve to your project folder.
// });

// router.get("/about", function (req, res) {
//   res.sendFile(path.join(__dirname + "/about.html"));
// });

// router.get("/sitemap", function (req, res) {
//   res.sendFile(path.join(__dirname + "/sitemap.html"));
// });

// //add the router
// app.use("/", router);
app.listen(PORT);

console.log(`Running at Port ${PORT}`);
