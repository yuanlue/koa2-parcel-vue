var mongoose = require('mongoose')

let careerSchema = mongoose.Schema({
	title:String,
	careerId:String,
	company:String,
	salary:String,
	createDate:String,
	detail:String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})

careerSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.updateAt = this.meta.createAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next()
});
careerSchema.statics = {
		fetch:function(){
		return new Promise((resolve,reject)=>{
			try{
				resolve(this.find({}))
			}catch(e){
				reject(e)
			}
		})
	},findone:function(id){
		return new Promise((resolve,reject)=>{
			try{
				resolve(this.findOne({careerId:id}))
			}catch(e){
				reject(e)
			}
		})
	}
	
}
module.exports = careerSchema