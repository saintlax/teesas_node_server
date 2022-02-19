/**
 * This module serves as the utility for all CronJobs in the application
 * @module UTILITY:CronJob
 */

const { schedule } = require('node-cron');

function sampleCronJob({ interval, ...otherParameters }) {
    try {
        schedule(`* */${interval.minute} */${interval.hour} * * *`, async () => {
            // YOUR CODE GOES HERE
            // console.log(otherParameters);
        });
    } catch (e) {
        verifyDevelopmentEnvironment
            ? console.log(`sampleCronJob: ${e.message}`)
            : appEvent.emit('error', e.message);
    }
}

function justACronJob({ interval, ...otherParameters }) {
    try {
        schedule(`* */${interval.minute} */${interval.hour} * * *`, async () => {
            // YOUR CODE GOES HERE
            // console.log(otherParameters);
        });
    } catch (e) {
        verifyDevelopmentEnvironment
            ? console.log(`justACronJob: ${e.message}`)
            : appEvent.emit('error', e.message);
    }
}

module.exports = { sampleCronJob, justACronJob };
