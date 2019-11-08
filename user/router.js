const express = require('express');
const { Router } = express;
const router = new Router();
const User = require('./model');
const bcrypt = require('bcrypt');

router.post('/user', (req, res) => {
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    };

    User.create(user)
        .then(image => res.json(image))
        .catch(err => console.log(err));
});

module.exports = router;
