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
mongoose.connect("mongodb://localhost/mongoHeadlines", { useNewUrlParser: true });

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});

module.exports = app;
