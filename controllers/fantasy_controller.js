var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {

  // This will let us show the Fantasy and it's owner.
  models.Fantasy.findAll({
    include: [ models.User ]
  })
  // connect the findAll to this .then
  .then(function(fantasy) {
    // grab the user info from our req.
    // This info gets saved to req via the users_controller.js file.
    res.render('fantasy/index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      fantasy: fantasy
    });
  });
});

// router.post('/create', function (req, res) {
//   // use the Fantasy model to create a Burger based on what's
//   // passed in req.body (burger_name, devoured, user_id)
//   models.Fantasy.create({
//     player_name: req.body.player_name,
//     devoured: req.body.devoured,
//     user_id: req.session.user_id
//   })
//   // connect the .create to this .then
//   .then(function() {
//     res.redirect('/');
//   });
// });
//
// router.put('/update/:id', function(req,res) {
//
//   // based on the boolean passed in req.body devoured
//   // and the id of the Burger (as passed in the url)
//   models.Fantasy.update(
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
  // based on the id passed in the url
  models.Fantasy.destroy({
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
