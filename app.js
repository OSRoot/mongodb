const dotenv = require('dotenv');
dotenv.config()
// 1) import mongoose
const mongoose = require('mongoose');

// 2) Connect to db via mongoose
mongoose.connect(process.env.HOST, { dbName: process.env.DB_NAME })
    .then(() => { console.log('Connected to database'); })
    .catch((err) => { console.log(err); })

// 3) create schema (normal no validation)
// const userSchema = new mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     id: Number
// });

// 3) create schema (with restriction or validation)
const userSchema = new mongoose.Schema({
    dept: {
        type: String,
        required: true,
        enum: ["SD", "SA", "MD"]
    },
    firstname: String,
    lastname: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        unique: true,
        required: true,
        min: 30,
        max: 1000

    }
});

// 4) create Model
const User = mongoose.model("Users", userSchema)

// CRUD Operations

// const getUsers = async () => {
//     try {
//         const data = await User.find({ firstname: "osroot" });
//         const data1 = await User.findById('641b9cf18c05b5f752c504c5');
//         const data2 = await User.find({}).where("firstname").equals("osroot");
//         console.log(data);
//         console.log(data1);
//         console.log(data2);
//     } catch (error) {
//         console.log(error);
//     }

// }
// getUsers()


// const getAllUsers = async () => {
//     try {
//         // const data = await User.find({}).limit(5).sort({ firstname: 1 }) //  sorting decending
//         // const data = await User.find({}).limit(5).sort({ firstname: -1 }) //  sorting ascending
//         // const data = await User.find({}).limit(5).sort({ firstname: 1 }).select({ firstname: 1, lastname: 1 }) // sort and display the selected items only with the .select() method
//         // const data = await User.find({ firstname: /^A/ }).limit(5).sort({ firstname: -1 }) // use regx to find more specific item
//         // const data = await User.find({ firstname: /^A.*a$/ }).sort({ firstname: -1 }) // use regx to find more specific item
//         // const data = await User.find({ id: { $gt: 11 } }).sort({ firstname: 1 }) // filter using query comparison // filter by id where id greater than 11
//         // const data = await User.find({ id: { $gt: 11, $lt: 14 } }).sort({ firstname: -1 }) //  filter by id where id greater than 11 and less than 14
//         // const data = await User.find({}).or({ firstname: /A/, lastname: /Men/ }).sort({ firstname: -1 }).count()  //  filter by firstname and lastname who includes a string
//         const data = await User.find({}).and({ firstname: /s/, lastname: /.(an)$/ }).sort({ firstname: -1 }).select({ firstname: 1, lastname: 1 })  //  filter by firstname and lastname who includes a string
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()