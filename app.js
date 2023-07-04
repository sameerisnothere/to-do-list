import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';      //the following 4 lines of code are necessary to use __dirname
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import {date, getDay} from  './date.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items  = [];
var workItems = [];

app.get("/" , function(req,res) {

res.render("lists", {listTitle : date(), newListItems : items});

})

app.post("/" , function(req, res){
    var item = req.body.newItem;

    if(req.body.button === "work"){
        workItems.push(item);
        res.redirect("/work");
    } else {

        items.push(item);
        res.redirect("/");
        
    }
})

app.get("/work", function(req,res){
    res.render("lists", {listTitle : "work list", newListItems: workItems });

})

app.get("/about", function(req, res){
    res.render("about");
})


app.listen(3000, function () {             //this starts our server at port 3000.
    console.log("Server running at port 3000");
})