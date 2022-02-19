/**
 * This handles all the required configuration for the User model.
 * @module MODELS:User
 */

 const { model, Schema } = require('mongoose');

 const UserSchema = new Schema({
     // Model Required fields
     id: {
         type: Number,
         required: true,
         unique: true,
         default: 0,
     },
     name: {
         type: String,
         required: true,
     },
     password: {
         type: String,
         required: true,
     },
     email: {
         type: String,
         required: true,
     },
     phone: {
        type: String,
        required: true,
    },
     dateOfBirth: {
        type: String,
        required: true,
    },
     location: {
        type: String,
    },
    preSchool:{
        type: Object,
        required: true,
    },
    createdOn: {
         type: Date,
         required: true,
         default: () => new Date(),
     },
     updatedOn: {
         type: Date,
         required: true,
         default: () => new Date(),
     },
 });
 
 model('User', UserSchema);
 