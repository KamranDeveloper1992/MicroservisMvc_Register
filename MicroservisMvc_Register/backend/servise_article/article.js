const express = require("express");
const app = express();

app.get("/artilce", (req, res) => {
  res.send("insert Artilce!");
});

app.listen(6000, () => {
  console.log("Article Service running on port 6000!");
});
