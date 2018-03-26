
/* Seting Connection Database 
    + setingan ini di instasiasi kembali pada : 
    + helpers/database/mongodb/connection
    + di panggil pada "addConnectionPool"
*/

'use strict';

const nconf = require('nconf');

const DB_URL = () => {
    return nconf.get('LOCALHOST_MONGO');
}

module.exports = {
    DB_URL: DB_URL
}