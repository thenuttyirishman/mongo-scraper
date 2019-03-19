// Dependencies
const express = require("express");
const exphbs = require(`express-handlebars`);
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const db = require("./models");

// Port
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Connect to the Mongo DB
mongoose.connect("mongodb+srv://mrmcgee:WaW920338@mattscraper-ri1se.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});

axios.get("http://books.toscrape.com").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    const $ = cheerio.load(response.data);
    // console.log(response.data);
    var result = {};

    $(".product_pod").each(function (i, attr) {
        
        result.image = $(this)
            .children(".image_container")
            .children("a")
            .children("img")
            .attr("src")
            console.log(result);
        result.title
    })
    
});

module.exports = app;
