const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
const UserSchema = new Schema({
name:{
    type: String,
    trim: true,
    required: "name is Required" 
},

})

const user = mongoose.model('user', UserSchema);

module.exports = user;