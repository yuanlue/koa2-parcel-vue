var mongoose = require('mongoose')

var carSchema = require('../schema/career')

var career = mongoose.model('user',carSchema,'users')

module.exports = career