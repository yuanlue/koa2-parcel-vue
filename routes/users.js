const router = require('koa-router')()
const career = require('../model/model')
const _ = require('underscore')
router.prefix('/users')
router.use(async (ctx,next)=>{
	console.log('=================')

	await next()
})
router.get('/',async (ctx, next)=>{

    let a = await career.fetch()
    //console.log(a)
  	ctx.response.type = 'html';
  	
  	await ctx.render('index', {
    data: a
  })
})
router.get('/modify',async (ctx,next)=>{
	let obj=await career.findone(ctx.query.id)
	console.log(obj)
	ctx.body=obj
	let newobj = {
		tel:120
	}
	_obj=_.extend(obj,newobj)
	console.log(_obj)
	career.save(_obj,(err)=>{
		if(err){
			console.log(err)
		}
	})
})
router.get('/bar',async (ctx, next)=> {

	let person = new career(
	{	name:'yuanlue',
		tel:18066537156,
		pay:1000
	})
	await person.save((error)=>{
		console.log('修改成功')	
	})
	ctx.body='修改成功'
})

module.exports = router
