const express = require('express');
const app = express();
const UsersRoutes = express.Router();

// Require users model in our routes module
var Users = require('../models/Users');

// Defined store route
UsersRoutes.route('/add').post(function (req, res) {
  let users = new Users(req.body);
  users.save()
    .then(users => {
      res.status(200).json({'Users': 'users is added'});
    })
    .catch(err => {
    res.status(400).send("unable to save");
    });
});

// Defined get data(index or listing) route
UsersRoutes.route('/').get(function (req, res) {
  Users.find(function (err, userses){
    if(err){
      console.log(err);
    }
    else {
      res.json(userses);
    }
  });
});

// Defined the login by checking if the password and username for one user is equally
UsersRoutes.route('/login').get(function (req, res) {
  var username = req.query.username;
  var password = req.query.password;
  console.log(username + ' Show on Node server as password ' + password);
  // console.log(req);
  Users.find({username: username, password: password}, function (err, user){
      res.json(user);
      // console.log(user);
  });
});

// Defined edit route
UsersRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Users.findById(id, function (err, users){
      res.json(users);
  });
});

//  Defined update route
UsersRoutes.route('/update/:id').post(function (req, res) {
  Users.findById(req.params.id, function(err, users,  next) {
    if (!users)
      return next(new Error('Could not load Document'));
    else {
        users.username = req.body.username;
        users.password = req.body.password;
        users.save().then(User => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
UsersRoutes.route('/delete/:id').get(function (req, res) {
  Users.findByIdAndRemove({_id: req.params.id}, function(err, users){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = UsersRoutes;