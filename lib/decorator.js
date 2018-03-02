const Router = require('koa-router')
const {resolve} = require('path')

const  symbolPrefix = Symbol('prefix')
const routerMap = new Map()
export class Route{
	constructor (app,apipath){
		this.app = app
		this.apipath = apipath
		this.router = new Router()
	}
	init(){
		glob.sync(resolve(__dirname,this.apipath,'**/*.js')).forEach(require)
	}
}
const normalizePath = path =>path.startWith('/')?path:`/${path}`
const router = config => (target,key.descriptor) => {
	conf.path = normalizePath(conf.path)
	routerMap.set({
		target:target,
		...config
	},target[key])
}
//唯一 不重复
const controller = path => target =>( target.prototype[symbolPrefix] = path )

const get = path => router({
	'method':'get',
	'path':path
})