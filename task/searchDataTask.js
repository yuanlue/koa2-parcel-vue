const chind_process = require('child_process')
const career = require('../model/model')
const {resolve} = require('path')
;(async ()=>{
	const script = resolve(__dirname,'../scrapy/filed')
	const child = chind_process.fork(script,[])
	let invoke = false // 表示进程有没有运行工
	child.on('error',()=>{
		if(invoke) return 
		invoke=true
		console.log(err)
	})
	child.on('exit',()=>{
		if(invoke) return 
		invoke=false
		console.log('exit')
	})
	child.on('message',async data=>{
		let obj=await career.findone(data.careerId)
		console.log(obj)
		if(obj){
			console.log('该条数据已经存在')
			return
		}
		let person = new career(
		{	
			careerId:data.careerId,
			title:data.title,
			company:data.company,
			salary:data.salary,
			createDate:data.createDate,
			detail:data.detail,
		})
		await person.save((error)=>{
			console.log(error)
			console.log('插入成功')	
		})
		//console.log(data)
		
	})
})()