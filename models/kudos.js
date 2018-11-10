const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
const KudosSchema = new Schema({

    sender: {
        type: String,
        trim: true,
        required: "name is Required"
      },
      reciever: {
        type: String,
        trim: true,
        required: "name is Required"
      },
      title: String,
      body: String,
      user:{
          type:Schema.Types.ObjectId,
          ref:"user"
      }

    });
    

const kudos = mongoose.model('kudos', KudosSchema);

module.exports = kudos;