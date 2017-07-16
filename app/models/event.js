'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
	event_id: {type: Number, require: true},
	creator: {type: String, required: true}, //username google
	starting: {type: Array, required: true}, //beginning of events list
	active: {type: Boolean, required: true}, //isEvent still active
	topic: {type: String, required: true}, // topic of the interview: design, data structure, case interview
	role: {type: String, require: true}, //interviewer or interviewee
	language: {type: String, required: false} //language of the interview
});

module.exports = mongoose.model('Event', EventSchema);