const express = require("express");
const app = express();

app.use(express.static("./dist"));

app.listen(8800, () => {
  console.log("server running at http://127.0.0.1:8800");
});
