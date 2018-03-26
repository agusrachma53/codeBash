'use strict';

const restify = require('restify');
const serveStatic = require('serve-static-restify');
const project = require('../../package.json');
const basicAuth = require('../auth/basic_auth_helper');
const wrapper = require('../helpers/utils/wrapper');
const karyawanHendler = require('../module/karyawan/hendlers/api_hendlers');

let AppServer = function(){
    this.server = restify.createServer({
        name: project.name + '-server',
        version: project.version
    });

    this.server.serverKey = '';
    this.server.use(restify.acceptParser(this.server.acceptable));
    this.server.use(restify.queryParser());
    this.server.use(restify.bodyParser());
    this.server.use(restify.authorizationParser());

    //required for basic auth
    //this.server.use(basicAuth.init());

    //anonymous can access the end point, place code bellow
    this.server.get('/', (req, res) => {
       wrapper.response(res,`success`,wrapper.data(`Domain Identity Management`),`This service is running properly`);
    });

    this.server.post('/api/v1/karyawan',basicAuth.isAuthenticated,karyawanHendler.insertKaryawan);
}
 
module.exports = AppServer;
