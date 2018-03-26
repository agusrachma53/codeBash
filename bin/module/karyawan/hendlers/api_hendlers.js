'use strict'

const wrapper = require('../../../helpers/utils/wrapper');
const CommandHandler = require('../repository/command/commandHendlers');


const insertKaryawan = async (req,res,next) => {

    const postData = async () => {
        return await CommandHandler.insertKaryawan(req.body);
    }
    const sendResponse = (result) => {
        (result.err) ? wrapper.response(res,'error',result) : wrapper.response(res,'success',result,'Karyawan has been Saved');
    }
    sendResponse(await postData());
}

module.exports = {
    insertKaryawan: insertKaryawan
}