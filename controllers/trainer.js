const knex = require('../db/knex');
var gymFull = '';

module.exports = {

  go: (req, res)=>{
    knex('trainers')
    .then((result)=>{
      res.render('trainer', {trainers: result} )
    })

   },

   profile: (req, res)=>{
     knex('trainers')
     .where('id', req.params.id)
     .then((result)=>{
       knex('pokemon')
       .where('trainer_id', result[0].id)
       .then((pokeResult)=>{
         res.render('trainerprofile', {trainer: result[0], pokemon: pokeResult});
       })

     })

   },

}
