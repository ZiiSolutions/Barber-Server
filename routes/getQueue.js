var express = require('express');
var router = express.Router();
var queuemanagementService = require('../services/queueManagementService');

/* Get queue . */
router.get('/', function (req, res, next) {
    console.log('Get request made');

    let queue = queuemanagementService.getQueue();

    var json = {
        name: "barber server",
        queue: queue
    };

    res.send(JSON.stringify(json));
});

module.exports = router;
