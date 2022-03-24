const express = require('express');

const router = express.Router();

const newUser = require('../controllers/newUserController');

router.post('/', newUser.createUser, newUser.createEm1, newUser.createEm2, newUser.createEm3, (req, res, next) => {
    return res.header('Access-Control-Allow-Origin', '*').sendStatus(200)
})

//router.delete('/newUser)





module.exports = router;