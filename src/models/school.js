/**
 * This handles all the required configuration for the School model.
 * @module MODELS:School
 */

 const { model, Schema } = require('mongoose');

 const SchoolSchema = new Schema({
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
     type: {
         type: String,
         required: true,
     },
     icon: {
         type: Number,
         required: true,
         default: true,
     },
     
     createdOn: {
         type: Date,
         required: true,
         default: () => new Date(),
     },
 });
 
 model('School', SchoolSchema);
 