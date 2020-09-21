const config = require("../configs/config");
const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");

let app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(config.APP_PORT, (err) => {
    if (err) throw err;
    console.log(`App started on port ${config.APP_PORT}`);
});
