// TeamRouter.js

const express = require('express');
const mongoose = require('mongoose');
const TeamRouter = express.Router();

const Team = require('../model/team');
const User = require('../model/user');

//post
TeamRouter.route('/create').post(function (req, res) {

  let { members } = req.body;
  req.body.members = members.split(',');
  const team = new Team(req.body);

  team.save()
    .then(user => {
      res.json('Team created successfully');
    })
    .catch(err => {
      res.status(400).send("unable to save team to database");
    });
});

//get
TeamRouter.route('/:memberId').get(function (req, res) {

  Team.aggregate([
    {
      '$match': {
        'members': {
          '$elemMatch': {
            '$eq': req.params.memberId
          }
        }
      }
    }, {
      '$project': {
        'team': {
          '$filter': {
            'input': '$members',
            'as': 'member',
            'cond': {
              '$not': {
                '$eq': [
                  '$$member', req.params.memberId
                ]
              }
            }
          }
        },
        'teamname': 1,
        '_id': 0
      }
    }, {
      '$unwind': {
        'path': '$team'
      }
    }, {
      '$lookup': {
        'from': 'users',
        'localField': 'email',
        'foreignField': 'members',
        'as': 'userInfo'
      }
    }
  ]).then(r => {
    return res.send(r);
  }).catch(err => {
    console.log("Aggregation error");
    console.log(err);
  });
});
module.exports = TeamRouter;