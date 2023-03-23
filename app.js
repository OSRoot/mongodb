const dotenv = require('dotenv');
dotenv.config()
// 1) import mongoose
const mongoose = require('mongoose');

// 2) Connect to db via mongoose
mongoose.connect(process.env.HOST, { dbName: process.env.DB_NAME })
    .then(() => { console.log('Connected to database'); })
    .catch((err) => { console.log(err); })

// 3) create schema
const userSchema = new mongoose.Schema({
    id: Number,
    firstname: String,
    lastname: String,
});

// 4) create Model
const User = mongoose.model("Users", userSchema)

// CRUD Operations 

const getUsers = async () => {
    try {
        const data = await User.find({ firstname: "osroot" });
        const data1 = await User.findById('641b9cf18c05b5f752c504c5');
        const data2 = await User.find({}).where("firstname").equals("osroot");
        console.log(data);
        console.log(data1);
        console.log(data2);
    } catch (error) {
        console.log(error);
    }

}
getUsers()