const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
console.log(env)
module.exports = require(`./dev.js`)