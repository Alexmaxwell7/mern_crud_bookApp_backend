const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
id:{
type:String,
unique:true
},
    title: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('Books',bookSchema)