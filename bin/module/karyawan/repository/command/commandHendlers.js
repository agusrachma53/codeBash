'use strict'

const wrapper = require('../../../../helpers/utils/wrapper');
const karyawanLogic =require('./domain')

const insertKaryawan = async (data) => {
    const postData = async () => {
        const karyawan = new karyawanLogic();
        const result = await karyawan.insertKaryawan(data);
        return result;
    }
    const response = await postData();
    return response;
}

module.exports = {
    insertKaryawan:insertKaryawan
}