const Bundle = require('parcel-bundler')
const views = require('koa-views') //打包后静态文件访问能力
const serve = require('koa-static')
const {resolve} = require('path')
const r = path => resolve(__dirname,path) //转为绝对路径
const bundler = new Bundle(r('../src/index.html'),{
	publicUrl:'/',
	watch:true
})
export const dev = async app =>{
	console.log(bundler)
	await bundler.bundle()
	console.log('正在编译')
	app.use(serve(r('../dist')))
	app.use(views(r('../dist')),{
		extension:"html"
	})

	app.use(async (ctx,next) => {
		await ctx.render('index.html')
	})
}