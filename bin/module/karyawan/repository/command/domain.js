


'use strict'

const rp = require('request-promise');
const request = require('request');
const nconf = require('nconf');
const model = require('./commandModel');
const command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const config = require('../../../../infra/configs/global_config');
const validate = require('validate.js');
const aws = require('aws-sdk');
const ba64 = require("ba64");
// const uuid = require('node-uuid');
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const randomstring = require('randomstring');
const util = require('../../../../helpers/utils/common');
const ObjectId = require('mongodb').ObjectId;
const check = require('./command');
const getAll = require('./commandHendlers');
const nodemailer = require('nodemailer');

class karyawanLogic{

    async insertKaryawan(data){
    

        let karyawanModel = model.karyawanModel();
        karyawanModel.nik = data.nik;
        karyawanModel.name = data.name;
        karyawanModel.divisi = data.divisi;
        karyawanModel.jabatan = data.jabatan;
        karyawanModel.imageKaryawan = data.imageKaryawan;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { 
                user: 'agusrachman531@gmail.com',
                pass: 'alone1971'
            }
        });

        let mailOptions = {
            from: 'agusrachman531@gmail.com',
            to: 'aizen531@gmail.com',
            subject: 'Sending Email Using Node.Js',
            text: 'that was easy'
        }

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Email Sent : ' + info.response);
            }
        })

        const result = await command.insertKaryawan(karyawanModel);
        if(result.err){
            return wrapper.error('fail','Insert Failed','404');
        }

        console.log(karyawanModel);

        
    }

}

module.exports = karyawanLogic;