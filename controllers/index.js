const knex = require('../db/knex');


module.exports = {


  main: (req, res)=>{res.redirect('/pokemon')},


  actuallyjustheindexpage: (req, res)=>{
    knex('pokemon')
    .then((result)=>{
      if(!req.session.p1){
        req.session.p1 = {name: 'temp'};
      };
      if(!req.session.p2){
        req.session.p2 = {name: 'temp'};
      };
      (req.session.p1);
      (req.session.p2);

      res.render('pokemon', {pokelist : result, p1: req.session.p1, p2: req.session.p2})
    })
  },

  add: (req, res)=>{
    knex('pokemon')
    .insert({
      id: req.body.id,
      name: req.body.name,
      cp: req.body.cp,
      trainer_id: req.body.trainer_id,
      in_gym: false
    })
    .then((result)=>{
      res.redirect('/pokemon')
    })
  },

  delete: (req, res)=>{
    knex('pokemon')
    .where('id', req.params.id)
    .del()
    .then((result)=>{
      res.redirect('/pokemon/#one')
    })
  },

  edit: (req, res)=>{
    knex('pokemon')
    .where('id', req.params.id)
    .then((result)=>{
      knex('trainers')
      .then((trainResult)=>{
        res.render('edit', {pokeEdit : result[0], trainer: trainResult})
      })
    })
  },

  sendit: (req, res)=>{
      knex('pokemon')
      .update({
        id: req.body.id,
        name: req.body.name,
        cp: req.body.cp,
        trainer_id: req.body.trainer
      })
      .where('id', req.params.id)
      .then((result)=>{
        res.redirect('/pokemon')
      })
      .catch((err)=>{
        throw(err)
      })
  },

  profile: (req, res)=>{
    knex('pokemon')
    .where('id', req.params.id)
    .then((pokeResult)=>{
      knex('trainers')
      .where("id", pokeResult[0].trainer_id)
      .then((trainResult)=>{
          (pokeResult[0]);
        res.render('profile', {pokemon: pokeResult[0], trainer: trainResult[0]})
      })
    })
  },


};
