/**
 * Created by zohairR on 12/04/2017.
 */
const mocha = require('mocha');
const chai  = require('chai').should();
const sinon = require('sinon');

var sandbox;

describe('routes/getQueue', function () {
    beforeEach(function(done) {
        sandbox = sinon.sandbox.create();
        done();
    });

    afterEach(function(done) {
        sandbox.restore();
        done();
    });
});