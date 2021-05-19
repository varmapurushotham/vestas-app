const mongoose = require('mongoose');

const trainingSchema = mongoose.Schema({
    delegate_id: String,
    first_name: String,
    last_name: String,
    course_title: String,
    country: String,
    training_provider: String,
    completed_on: String,
    valid_until: String
})

const trainingModel = mongoose.model('trainingDB', trainingSchema);

module.exports = trainingModel;