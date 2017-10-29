const knex = require('../db/knex');


module.exports = {

  go: (req, res)=>{
    knex('pokemon')
    .where('in_gym', false)
    .then((pokemon)=>{
       res.render('gym', {p1: req.session.p1, p2: req.session.p2, pokelist: pokemon} )
    })
    console.log(req.session.p1);
    console.log(req.session.p2);
   },

  getswole: (req, res)=>{
    knex('pokemon')
    .where('id', req.params.id)
    .then((result)=>{

      function changeStatus() {
        knex('pokemon')
        .where('id', req.params.id)
        .update('in_gym', true)
        .then((result)=>{
          return;
        })
      };

      if(req.session.p1.name == "temp"){
        req.session.p1 = result[0];
        changeStatus();
        res.redirect('/')
      }else if(req.session.p2.name == "temp" ){
          req.session.p2 = result[0];
          changeStatus();
          res.redirect('/')
        }else{
          knex('pokemon')
          .where('in_gym', true)
          .then((result)=>{
            if(result.length == 2){
              res.send('Gym is full')
            }
          })
        }
      })

  },

  leavegym: (req, res)=>{
    knex('pokemon')
    .where('id', req.params.id)
    .then((result)=>{

      var pokeSesh = result[0];

      function changeStatusFalse(){
        knex('pokemon')
        .where('id', pokeSesh.id)
        .update('in_gym', false)
        .then((result)=>{
          res.redirect('/pokemon');
        })
      };

      if(req.session.p1.id == pokeSesh.id){

        req.session.p1 = {name: 'temp'};
        changeStatusFalse();
      };
      if(req.session.p2.id == pokeSesh.id){
        req.session.p2 = {name: 'temp'};
        changeStatusFalse();
      }
    })


  },

  ingymfromgym: (req, res)=>{

    if(req.body.p1dlist){
    knex('pokemon')
      .where('id', req.body.p1dlist)
      .then((p1result)=>{
        req.session.p1 = p1result[0];
        knex('pokemon')
        .where('id', p1result[0].id)
        .update('in_gym', true)
        .then((loadPage)=>{
          res.redirect('/gym/#one')
        })
      })
    }
    if(req.body.p2dlist){
    knex('pokemon')
      .where('id', req.body.p2dlist)
      .then((p2result)=>{
        req.session.p2 = p2result[0];
        knex('pokemon')
        .where('id', p2result[0].id)
        .update('in_gym', true)
        .then((loadPage)=>{
          res.redirect('/gym/#one')
        })
      })
    }

  },

  reset: (req, res)=>{
    req.session.p1 = {name: 'temp'}
    req.session.p2 = {name: 'temp'}
    knex('pokemon')
    .where('in_gym', true)
    .update('in_gym', false)
    .then((result)=>{
      res.redirect('/gym/#one')
    })
  },
}
