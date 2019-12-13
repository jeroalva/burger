var exphbs = require("express-handlebars");
require("dotenv").config();
var express = require("express");
var app = express();
var PORT = process.env.PORT
require("./config/connection");
var orm = require("./config/orm");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var renderLoad = function(data, res){
    res.render("burgers",{burgers: data})
}

app.get("/", function(req, res) {
    orm.selectAll("name", "status", "id", "burgers", renderLoad, res);
  });

app.put("/api/devour/:id", function(req, res){
    orm.updateOne("burgers", "status", true, "id", req.params.id, renderLoad, res);
})

app.post("/api/new", function(req, res){
    if(!req.body.name){
        res.send("empty");
    }
    else{
        orm.insertOne("burgers", req.body.name, renderLoad, res);
    }
})

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});