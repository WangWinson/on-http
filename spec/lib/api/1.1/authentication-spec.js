// Copyright 2015, EMC, Inc.
/* jshint node:true */

'use strict';

var ws = require('ws');

describe('Http.Api.Auth', function () {

    helper.before(function () {
        return [
            dihelper.simpleWrapper(require('swagger-express-mw'), 'swagger'),
            dihelper.simpleWrapper(ws.Server, 'WebSocketServer'),
            dihelper.simpleWrapper({}, 'Task.Services.OBM'),
            dihelper.simpleWrapper({}, 'ipmi-obm-service'),
            dihelper.requireWrapper('rimraf', 'rimraf'),
            dihelper.requireWrapper('os-tmpdir', 'osTmpdir'),
            helper.require('/lib/services/http-service'),
            helper.requireGlob('/lib/api/1.1/**/*.js'),
            helper.requireGlob('/lib/services/**/*.js'),
            helper.requireGlob('/lib/serializables/**/*.js')
        ];
    });

    helper.after();

    it('should add routes', function () {
        var router = helper.injector.get('Http.Api.Auth');
        router.init();
        var app = require('express')();
        app.use(router.getRouter());
    });
});
