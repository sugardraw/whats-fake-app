const express = require("express");
const route = require("./routes");

const app = express();
const port = process.env.port || 3001;

app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", [
    "http://localhost:3000"
  ]);
  res.header("Access-Control-Allow-Headers", "*");
  res.header('Content-Type', 'application/json');
  next();
});

app.use(route);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
