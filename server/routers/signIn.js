const express = require('express');

const router = express.Router();

const signIn = require('../controllers/signInController')


// this is the path for signing in 
// After Signing in, send all data from users table (data.rows[0]) back to client
router.post('/', signIn.user, (req, res) => {
    console.log('what we are sending to the front', res.locals.user)
    return res.status(200).json(res.locals.user)

} )




module.exports = router;