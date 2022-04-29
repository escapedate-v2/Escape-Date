const express = require('express');
const router = express.Router();
const dateController = require('../controllers/dateController.js')


router.delete('/', dateController.delete ,(req, res) => {
    return res.status(200).json("Successfully deleted date")
})

module.exports = router;