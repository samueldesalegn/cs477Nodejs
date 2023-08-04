const express = require('express');
const path = require('path');


const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'products.html'));
});

router.post('/', (req, res, next) => {
    res.redirect('/add-products');
});

module.exports = router;