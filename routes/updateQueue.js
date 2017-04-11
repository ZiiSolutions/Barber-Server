var express = require('express');
var router = express.Router();
var queuemanagementService = require('../services/queueManagementService');

const HTTP_SUCESS_STATUS_CODE = 200;

/* Update queue. */
router.post('/', function (req, res, next) {
    console.log("dcdddddfdaf");
    queuemanagementService.setQueue(req.body.queue);
    req.status(HTTP_SUCESS_STATUS_CODE);
    //TODO make sure client gets code and it doesn't hang
});

module.exports = router;
