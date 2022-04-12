const express = require('express');
const router = express.Router();
const db = require('sequelize');
const { Article, Section } = require("../models");

const SMALL_DYNAMIC_ID = 1;
const LARGE_DYNAMIC_ID = 2;
/* GET article listing. */
router.get('/small', (req, res, next) => {
    Article.findOne({ include: Section, where: { id: SMALL_DYNAMIC_ID} })
    .then((article) => {
        console.log(JSON.stringify(article))
        res.render('dynamic', { article: article});
    })
    .catch(error => {
        console.log(error);
    });
});

router.get('/large', (req, res, next) => {
    Article.findOne({ include: Section, where: { id: LARGE_DYNAMIC_ID} })
        .then((article) => {
            console.log(JSON.stringify(article))
            res.render('dynamic', { article: article});
        })
        .catch(error => {
            console.log(error);
        });
})

module.exports = router;