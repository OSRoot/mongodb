const dotenv = require('dotenv');
dotenv.config()
const mongoose = require('mongoose');

mongoose.connect(process.env.HOST, { dbName: process.env.DB_NAME })
    .then(() => { console.log('Connected to database'); })
    .catch((err) => { console.log(err); })