'use strict';
let express = require('express'),
    router = express.Router(),
    health = require('../controllers/healthController');

router.get('/', health.check);

module.exports = router;