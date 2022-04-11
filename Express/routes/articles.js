const express = require('express');
const router = express.Router();
const db = require('sequelize');
const { Article, Section } = require("../models");

/* GET article listing. */
router.get('/', function(req, res, next) {
    Article.findAll({ include: Section })
        .then((articles) => {
            console.log(JSON.stringify(articles))
            res.render('articleList', { title: 'Articles', list: articles });
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
