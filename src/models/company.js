const mongoose = require('mongoose');

const comapanySchema = new mongoose.Schema({
    compname :{
        type : String
    
    },

    empname :{
        type: String
    },

    gender :{
        type : String

    },


})

const newcompany = new mongoose.model('company', comapanySchema);

module.exports = newcompany ;
