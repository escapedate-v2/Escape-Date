const express = require('express');

const router = express.Router();

const signIn = require('../controllers/signInController')


// this is the path for signing in 
// After Signing in, send all data from users table (data.rows[0]) back to client
router.post('/', signIn.user, signIn.getDates, signIn.getContacts, (req, res) => {
    //console.log('what we are sending to the front', res.locals.userData)
    return res.header('Access-Control-Allow-Origin', '*').status(200).json(res.locals.allData)

} )

// signin.getcontacts

// signin.getdate


module.exports = router;