const express = require('express');
const { Router } = express;
const router = new Router();
const Image = require('./model');

router.get('/image', (req, res) => {
    Image.findAll()
        .then(images => res.send(images))
        .catch(err => console.log(err));
});

router.post('/image', (req, res) => {
    Image.create(req.body)
        .then(image => res.json(image))
        .catch(err => console.log(err));
});

module.exports = router;
