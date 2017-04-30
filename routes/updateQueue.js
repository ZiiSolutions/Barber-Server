var express = require('express');
var router = express.Router();
var queuemanagementService = require('../services/queueManagementService');

const HTTP_SUCESS_STATUS_CODE = 200;

/* Update queue. */
router.post('/', function (req, res, next) {
    console.info("{post: recieved and queue updated}");
    queuemanagementService.setQueue(req.body.queue);
    req.sendStatus(HTTP_SUCESS_STATUS_CODE);
    //TODO make sure to handle error and send back any that need to be sent back to client
});

module.exports = router;
