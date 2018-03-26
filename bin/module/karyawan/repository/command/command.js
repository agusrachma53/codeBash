'use strict'


const mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');


const insertKaryawan = async(document) => {
    const db = new mongo(config.DB_URL());
    db.setCollection('book');
    const result = await db.insertOne(document);
    return result;

}

module.exports = {
    insertKaryawan: insertKaryawan
}