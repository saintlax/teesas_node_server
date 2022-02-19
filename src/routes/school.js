/**
 * This handles the School routes declaration in the application
 * @module ROUTES:School
 */

 const { NODE_ENV } = process.env;

 const router = require('express').Router();
 
 const { Logger } = require('../utilities/logger');
 const SchoolService = require('../services/school/school');
 
 const schoolService = new SchoolService();
 
 try {
     router
         .post('/', async (request, response, next) => {
             request.payload = await schoolService.createRecord({ request, next });
             next();
         })
         .post('/type/', async (request, response, next) => {
             console.log(request.body)
            //  response.send([
            //     {
            //         name: 'Reception',
            //         _id: '89678576565',
            //         id: 1,
            //         icon: 0
            //     },
            //     {
            //         name: 'Food and drinks',
            //         _id: 'oiuty756546',
            //         id: 2,
            //         icon: 0
            //     },
            // ])
            request.payload = await schoolService.createRecord({ request, next });
            next();
        })
         .get('/', async (request, response, next) => {
             request.payload = await schoolService.readRecords({ request, next });
             next();
         })
         .get('/:id', async (request, response, next) => {
             request.payload = await schoolService.readRecordById({ request, next });
             next();
         })
         .get('/filter', async (request, response, next) => {
             request.payload = await schoolService.readRecordsByFilter({ request, next });
             next();
         })
         .get('/search/:keys/:keyword', async (request, response, next) => {
             request.payload = await schoolService.readRecordsByWildcard({ request, next });
             next();
         })
         .put('/', async (request, response, next) => {
             request.payload = await schoolService.updateRecords({ request, next });
             next();
         })
         .put('/:id', async (request, response, next) => {
             request.payload = await schoolService.updateRecordById({ request, next });
             next();
         })
         .delete('/', async (request, response, next) => {
             request.payload = await schoolService.deleteRecords({ request, next });
             next();
         })
         .delete('/:id', async (request, response, next) => {
             request.payload = await schoolService.deleteRecordById({ request, next });
             next();
         });
 } catch (e) {
     const currentRoute = '[Route Error] /school';
     if (verifyDevelopmentEnvironment) {
         console.log(`${currentRoute}: ${e.message}`);
     } else {
         Logger.error(`${currentRoute}: ${e.message}`);
     }
 } finally {
     module.exports = router;
 }
 