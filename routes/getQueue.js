var express = require('express');
var router = express.Router();
var queuemanagementService = require('../services/queueManagementService');

/* Get queue . */
router.get('/', function (req, res, next) {
    console.log('{Get request made}');

    var queue = queuemanagementService.getQueue();

    var json = {
        name: "barber server",
        queue: queue
    };

    //TODO: Do some validation on the queue and then send
    res.send(json);
});

module.exports = router;
