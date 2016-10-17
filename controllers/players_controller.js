var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {

  // SOLUTION:
  // =========
  // use the player model to find all players,
  // and use the include option to grab info from the User model.
  // This will let us show the player and it's owner.
  models.Player.findAll({
    include: [ models.User ]
  })
  // connect the findAll to this .then
  .then(function(players) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('players/index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      players: players
    });
  });
});

router.post('/create', function (req, res) {
  // SOLUTION:
  // =========
  // use the player model to create a player based on what's
  // passed in req.body (player_name, devoured, user_id)
  models.Player.create({
    player_name: req.body.player_name,
    // devoured: req.body.devoured,
    user_id: req.session.user_id
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  });
});

// router.put('/update/:id', function(req,res) {
//   // SOLUTION:
//   // =========
//   // use the player model to update a player's devoured status
//   // based on the boolean passed in req.body devoured
//   // and the id of the player (as passed in the url)
//   models.Player.update(
//   {
//     devoured: req.body.devoured
//   },
//   {
//     where: { id : req.params.id }
//   })
//   // connect it to this .then.
//   .then(function (result) {
//     res.redirect('/');
//   }, function(rejectedPromiseError){
//
//   });
// });


router.delete('/delete/:id', function(req,res) {
  // use the player model to delete a player
  // based on the id passed in the url
  models.Player.destroy({
    where: {
      id: req.params.id
    }
  })
  // connect it to this .then.
  .then(function() {
    res.redirect('/');
  });

});


module.exports = router;
