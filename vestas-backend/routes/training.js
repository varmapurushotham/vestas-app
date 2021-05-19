var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const trainingModel = require('../models/training.model')

/* GET All Trainings */
router.get('/all', function (req, res, next) {
    trainingModel.find(function(err, allTrainings) {
        if(err) {
            res.send({ status: 500, message: 'Unable to get Trainings List' })
        } else {
            const recordCount = allTrainings.length
            res.send({ status: 200, recordCount: recordCount, trainingsList: allTrainings })
        }
    })
});

/* Create NEW Training */
router.post('/add-training/add', function (req, res, next) {

    const trainingObj = new trainingModel({
        delegate_id: req.body.newTraining.employeeId,
        first_name: req.body.newTraining.firstName,
        last_name: req.body.newTraining.lastName,
        course_title: req.body.newTraining.courseTitle,
        country: req.body.newTraining.country,
        training_provider: req.body.newTraining.trainingProvider,
        completed_on: req.body.newTraining.completedOn,
        valid_until: req.body.newTraining.validUntil
    })

    trainingObj.save(function(err, trainingObj){
        if(err) {
            res.send({ status: 500, message: 'Unable to add Training' })
        } else {
            res.send({ status: 200, message: 'Added Successfully!!', results: trainingObj })
        }
    })
});

/* Update Training */
router.put('/update', function (req, res, next) {
    res.send('respond with a resource');
});

/* Delete a Training */
router.delete('/delete', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
