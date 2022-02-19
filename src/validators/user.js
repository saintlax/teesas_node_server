/**
 * Handles the implementation of Joi package for User service validation
 * @module VALIDATOR:User
 */

 const Joi = require('@hapi/joi');

 const createSchema = Joi.object({
     name: Joi.string().required().label('Full Name'),
     dateOfBirth: Joi.string().required().label('Date of birth'),
     phone: Joi.string().required().label('Phone Number'),
     email: Joi.string().email().required().label('Email'),
     password: Joi.string().min(6).max(16).required().label('Password'),
     location: Joi.string().min(6).max(16).required().label('Location'),
     preSchool: Joi.object(),
    //  confirmPassword: Joi.any()
    //      .equal(Joi.ref('password'))
    //      .required()
    //      .label('Confirm password')
    //      .options({ messages: { 'any.only': '{{#label}} does not match' } }),
 });
 
 const updateSchema = Joi.object({
     email: Joi.string().email().required().label('Email'),
     password: Joi.string().min(6).max(16).required().label('Password'),
 });
 const loginSchema = Joi.object({
    phone: Joi.string().required().label('Phone'),
    password: Joi.string().min(6).max(16).required().label('Password'),
});
 
 module.exports = {
     createSchema,
     updateSchema,
     loginSchema,
 };
 