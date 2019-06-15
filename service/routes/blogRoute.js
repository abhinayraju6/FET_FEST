// BlogRouter.js

const express = require('express');
const BlogRouter = express.Router();

const Blog = require('../model/blog');

//post
BlogRouter.route('/create').post(function (req, res) {
  console.log(req.body);
  const blog = new Blog(req.body);

  blog.save()
    .then(user => {
      res.json('Blog added successfully');
    })
    .catch(err => {
      res.status(400).send("Unable to save blogs to database");
    });
});

//get
BlogRouter.route('/:teamID').get(function (req, res) {
  Blog.find({ teamID: req.params.teamID }, (err, blogs) => {
    return res.send(blogs);
  });
});
module.exports = BlogRouter;