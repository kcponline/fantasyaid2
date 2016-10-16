var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {

  // use the Burger model to find all Burgers,
  // and use the include option to grab info from the User model.
  // This will let us show the Burger and it's owner.
  models.Burger.findAll({

    include: [ models.User ]
  })
  // connect the findAll to this .then
  .then(function(burgers) {
    // grab the user info from our req.
    // This info gets saved to req via the users_controller.js file.
    res.render('burgers/index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      burgers: burgers
    });
  });
});

router.post('/create', function (req, res) {

  // passed in req.body (burger_name, devoured, user_id)
  models.Fantasy.create({
    player_name: req.body.player_name,
    devoured: req.body.devoured,
    user_id: req.session.user_id
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  });
});

router.put('/update/:id', function(req,res) {

  // based on the boolean passed in req.body devoured
  // and the id of the Burger (as passed in the url)
  models.Fantasy.update(
  {
    devoured: req.body.devoured
  },
  {
    where: { id : req.params.id }
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/');
  }, function(rejectedPromiseError){

  });
});


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
