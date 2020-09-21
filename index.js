const package = require("./package.json");
const fs = require("fs")

/*
    * Axera by IchiiDev.
    License: GNU GPLv3 (Refer to LICENSE file)
    */

// Starting debug message.
console.log(`Starting "\x1b[33m${package.name}\x1b[0m" app.\n\x1b[32mVersion:\x1b[0m ${package.version}\n\x1b[32mAuthor:\x1b[0m ${package.author}`);

// Checks if the datas directory exists. 
async function checkDataDir() {

    if (!fs.existsSync("./data")) {
        console.log("Requiring creation of dir \x1b[33mdata\x1b[0m");
        // Creation of databases & Storages directory.
        fs.mkdir("./data", () => { });
    }

    if (!fs.existsSync("./data/database.db")) {
        console.log("Requiring creation of file \x1b[33mdatabase.db\x1b[0m");
        // Creation of the database file.
        fs.writeFile("./data/database.db", "", () => { });
    }

    if (!fs.existsSync("./data/pictures")) {
        console.log("Requiring creation if dir \x1b[33mdata\\pictures\x1b[0m");
        // Creation of the pictures folder.
        fs.mkdir("./data/pictures", () => { });
    }
}

checkDataDir().then();