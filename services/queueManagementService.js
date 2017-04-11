/**
 * Created by zohairR on 07/04/2017.
 */
'use strict';

class QueueManagementService {
    constructor() {
        this.queue = 1;
    }

    setQueue(queueSize) {
        this.queue = queueSize;
    }

    getQueue() {
        return this.queue;
    }
}

module.exports = new QueueManagementService();
