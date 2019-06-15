// UserRouter.js

const express = require('express');
const UserRouter = express.Router();

const User = require('../model/user');

//post
UserRouter.route('/create').post(function (req, res) {

  const user = new User(req.body);

  user.save()
    .then(user => {
      res.json('User created successfully');
    })
    .catch(err => {
      res.status(400).send("Unable to save user to database");
    });
});

//get
UserRouter.route('/:teamID').get(function (req, res) {
  User.find({ teamID: req.params.teamID }, (err, users) => {
    return res.send(users);
  });
});
module.exports = UserRouter;