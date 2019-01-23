// //enviroment variables
// require('dotenv').config();
var express = require('express');
var request = require('request');
var layouts = require('express-ejs-layouts');
var parser = require('body-parser');

var methodOverride = require('method-override');
var db= require('./models');
var app = express();


app.set('view engine', 'ejs');
app.use(layouts);
app.use('/', express.static('public'));
app.use(methodOverride('_method'));
app.use(parser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/favorites', function(req, res) {
	db.animal.findAll().then(function(animal) {
		res.render('favorite', {animal: animal});
	})
});

app.get('/favorites/new', function(req, res) {
	db.animal.findAll().then(function(animal) {
		res.render('add', {animal: animal});
	})
});

app.post('/favorites', function(req, res) {
	console.log(req.body);
        db.animal.findOrCreate({ 
			where: {species_name: req.body.species_name},
			defaults: req.body
		})
		.spread( function(animal, created) {
			console.log(animal.get());
			res.redirect('/favorites');
		})
        .catch( function(error){
            console.log("error", error);
            res.render('error')
        })
});

var server = app.listen(process.env.PORT || 3000, function(){
	console.log("Hello World!");
});