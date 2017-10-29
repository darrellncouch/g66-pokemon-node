//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const gym = require("../controllers/gym.js");
const trainer = require("../controllers/trainer.js");

module.exports = function(app){

  app.get('/', index.main);

  app.get('/pokemon', index.actuallyjustheindexpage);

  app.post('/addpoke', index.add);

  app.get('/delete/:id', index.delete);

  app.get('/edit/:id', index.edit);

  app.post('/sendit/:id', index.sendit);

  app.get('/profile/:id', index.profile);

  //gym
  app.get('/gym', gym.go);

  app.get('/putingym/:id', gym.getswole);

  app.get('/removefromgym/:id', gym.leavegym);

  app.post('/putingymfromgym', gym.ingymfromgym);

  app.get('/resetgym', gym.reset);

  //trainer
  app.get('/trainers', trainer.go);

  app.get('/trainer/:id', trainer.profile);



}
