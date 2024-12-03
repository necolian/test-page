const express = require("express");
const path = require("path");
const app = express();

app.set("view engine","ejs");

app.get('/', (req, res) => {
    var message = process.env.MESSAGE;
    var h1 = process.env.H1;
    if (!message){
        message = "今のところ何か追加＆更新する予定はNothing";
    }
    if (!h1){
        h1 = "テストページだお☆";
    }
    res.render("index",{h1: h1, message: message});
});

app.listen(3000, '0.0.0.0', () => { 
    console.log("port is open");
});
