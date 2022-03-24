const express = require('express');
const router = express.Router();
const dateController = require('../controllers/dateController.js')

router.post('/', dateController.create, (req, res) => {
    return res.status(200).json(res.locals.date_id);
})



module.exports = router;