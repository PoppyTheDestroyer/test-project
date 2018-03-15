const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const sequelize = require("sequelize");
const mysql = require("mysql");
const app = express();
const models = require("./models");
const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "item_list"
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);
models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
