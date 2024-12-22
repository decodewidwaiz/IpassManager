const express = require("express");
const path = require("path");
const fs = require("fs")


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    fs.readdir(`./files`, function(err, files) {
        res.render("index", { files: files });
    });
});


app.post("/create", (req, res) => {
    const { username, password } = req.body;
    fs.writeFileSync(`./files/${username}.txt`, password);
    res.redirect("/");
});


app.listen(3000, () => {
    console.log("Server is also running on port 3000");
});