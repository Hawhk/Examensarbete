const express = require('express');
const router = express.Router();
const path = require('path');

/* GET article listing. */
router.get('/small', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/static_small.html'));
});

router.get('/large', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/static_large.html'));
})

module.exports = router;