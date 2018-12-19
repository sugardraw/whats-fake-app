const express = require("express");
const route = require("./routes");

const app = express();
const port = process.env.port || 3001;

app.use(function(req, res, next) {

  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(route);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
