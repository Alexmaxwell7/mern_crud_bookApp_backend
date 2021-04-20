const mongoose = require('mongoose')


const usersSchema = new mongoose.Schema({
id:{
type:String,
unique:true
},
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },

    website:{
        type: String,
        required:true
    }

})

module.exports = mongoose.model('Users',usersSchema)