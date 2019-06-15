// EventRouter.js

const express = require('express');
const mongoose = require('mongoose');
const EventRouter = express.Router();

const Event = require('../model/event');

//post
EventRouter.route('/create').post(function (req, res) {

    let { required } = req.body;
    req.body.required = required.split(',');

    let { optional } = req.body;
    req.body.optional = optional.split(',');

    let { actions } = req.body;
    req.body.actions = actions.split(',');

    const event = new Event(req.body);

    event.save()
        .then(user => {
            res.json('Event added successfully');
        })
        .catch(err => {
            res.status(400).send("Unable to save events to database");
        });
});

//get
EventRouter.route('/:teamID').get(function (req, res) {
    Event.find({ teamID: req.params.teamID }, (err, events) => {
        console.log(req.params.teamID);
        return res.send(events);
    });
});
module.exports = EventRouter;