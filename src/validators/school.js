/**
 * Handles the implementation of Joi package for School service validation
 * @module VALIDATOR:School
 */

 const Joi = require('@hapi/joi');

 const createSchema = Joi.object({
     name: Joi.string().required().label('Name'),
     type: Joi.string().required().label('Type'),
     
 });
 
 const updateSchema = Joi.object({
    name: Joi.string().required().label('Name'),
    type: Joi.string().required().label('Type'),
 });
 
 module.exports = {
     createSchema,
     updateSchema,
 };
 