const config = require("../configs/config");
const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./data/database.json');
const database = low(adapter);

database.defaults({ users: [], posts: [] }).write();

let app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

module.exports = { app, database };

fs.readdir("./app/endpoints", (err, files) => {
    if (err) throw err;
    for (let file of files) {
        if (!file.endsWith(".js") || file.startsWith("-")) return;
        require("./endpoints/" + file);
    }
});

app.listen(config.APP_PORT, (err) => {
    if (err) throw err;
    console.log(`App started on port ${config.APP_PORT}`);
});
