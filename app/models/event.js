'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
	creator: {type: String, required: true}, //username google
	starting: {type: Array, required: true}, //beginning of events list
	active: {type: Boolean, required: true}, //isEvent still active
	topic: {type: String, required: true}, // topic of the interview: design, data structure, case interview
	role: {type: String, require: true}, //interviewer or interviewee
	lingua: {type: String, required: true}, //language of the interview
	langInterview: {type: String, required: true}
});

module.exports = mongoose.model('Event', EventSchema);