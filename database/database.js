const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/career')
const db = mongoose.connection
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open',()=>{
	console.log('connect db successful')
})