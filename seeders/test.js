var db = require('../models');

// db.animal.create({
//         species_name: "dog",
//         scientific_name: "dogusmaximus",
//         image_url: "https://s.hswstatic.com/gif/animal-stereotype-orig.jpg",
//         description: "man's best friend",
//         extinct: false
// }).then(function(animal) {
//   console.log('Created: ', animal.species_name);
// });

// db.animal.create({
//         species_name: "cat",
//         scientific_name: "cattusgreatus",
//         image_url: "https://static.boredpanda.com/blog/wp-content/uploads/2017/01/funny-animal-selfies-fb.png",
//         description: "feline companion",
//         extinct: false
// }).then(function(animal) {
//   console.log('Created: ', animal.species_name);
// });


// db.animal.create({
//         species_name: "dino",
//         scientific_name: "dinodinous",
//         image_url: "http://www.jurassicworld.com/sites/default/files/2018-06/960x540_0000_triceratops.pngg",
//         description: "biggest creature to walk to the earth",
//         extinct: false
// }).then(function(animal) {
//   console.log('Created: ', animal.species_name);
// });


db.animal.create({
            species_name: "pig",
            scientific_name: "baconisgreatamous",
            image_url: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/pig-full-body.adapt.945.1.jpg",
            description: "mmmm pork belly, get in my belly!",
            extinct: false
    }).then(function(animal) {
      console.log('Created: ', animal.species_name);
    });
