exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pokemon').del(),

    knex('pokemon').insert({id: 500, name: "Bulbasaur",
      cp: 15, in_gym: false, trainer_id: 1, img_link: "http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en"}),
    knex('pokemon').insert({id: 501, name: "Ivysaur",
      cp: 60, in_gym: false, trainer_id: 1, img_link: "https://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en"}),
    knex('pokemon').insert({id: 502, name: "Venasaur",
      cp: 100, in_gym: false, trainer_id: 2, img_link:"https://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en"}),
    knex('pokemon').insert({id: 503, name: "Charmander",
      cp: 15, in_gym: false, trainer_id: 2, img_link: "http://vignette1.wikia.nocookie.net/nintendo/images/5/56/Charmander.png/revision/latest?cb=20141002083351&path-prefix=en"}),
    knex('pokemon').insert({id: 504, name: "Charmeleon",
      cp: 55, in_gym: false, trainer_id: 2, img_link:"https://vignette.wikia.nocookie.net/helixpedia/images/f/fb/Charmeleon.png/revision/latest?cb=20140316150355"}),
    knex('pokemon').insert({id: 505, name: "Charizard",
      cp: 99, in_gym: false, trainer_id: 3, img_link: "https://vignette2.wikia.nocookie.net/nintendo/images/9/95/Charizard.png/revision/latest?cb=20141002083306&path-prefix=en" }),
    knex('pokemon').insert({id: 506, name: "Squirtle",
      cp: 19, in_gym: false, trainer_id: 4, img_link: "https://vignette.wikia.nocookie.net/nintendo/images/e/e3/Squirtle.png/revision/latest/scale-to-width-down/480?cb=20141002083243&path-prefix=en"}),
    knex('pokemon').insert({id: 507, name: "Wartortle",
      cp: 22, in_gym: false, trainer_id: 4, img_link: "https://vignette2.wikia.nocookie.net/nintendo/images/d/d7/Wartortle.png/revision/latest?cb=20141002083217&path-prefix=en"}),
    knex('pokemon').insert({id: 508, name: "Blastoise",
      cp: 111, in_gym: false, trainer_id: 4, img_link: "https://vignette.wikia.nocookie.net/vsbattles/images/4/41/Blastoise.png/revision/latest?cb=20151111225541" }),
    knex('pokemon').insert({id: 509, name: "Caterpie",
      cp: 5, in_gym: false, trainer_id: 3, img_link: "https://vignette.wikia.nocookie.net/nintendo/images/0/05/Caterpie.png/revision/latest?cb=20141002083123&path-prefix=en" }),
    knex('pokemon').insert({id: 510, name: "Metapod",
      cp: 18, in_gym: false, trainer_id: 1, img_link: "https://vignette.wikia.nocookie.net/helixpedia/images/6/6b/Metapod.png/revision/latest?cb=20140426204856"}),
    knex('pokemon').insert({id: 511, name: "Butterfree",
     cp: 104, in_gym: false, trainer_id: 1, img_link: "https://vignette.wikia.nocookie.net/nintendo/images/9/96/Butterfree.png/revision/latest?cb=20141002083032&path-prefix=en"})
  );
};
