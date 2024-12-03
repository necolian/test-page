const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs");

app.get('/', (req, res) => {
    var message = process.env.MESSAGE || "今のところ何か追加＆更新する予定はNothing";
    var h1 = process.env.H1 || "テストページだお☆";
    res.render("index.ejs",{h1: h1, message: message});
});

module.exports = app;
