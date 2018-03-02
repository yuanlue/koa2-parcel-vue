var path = require('path');

//错误日志输出完整路径
var errorLogPath = path.resolve(__dirname, "../logs/error/error");
 
//响应日志输出完整路径
var responseLogPath = path.resolve(__dirname, "../logs/response/response");


module.exports ={
    "appenders":{
        error: {
            "category":"errorLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": errorLogPath,             //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log",      //后缀，每小时创建一个新的日志文件
            "path": errorLogPath  
        },
        response: {
            "category":"resLogger",
            "type": "dateFile",
            "filename": responseLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": responseLogPath,
        }
    },
    "categories" : { 
        error: { appenders: ['error'], level: 'error' },
        response: { appenders: ['response'], level: 'info' },
        default: { appenders: ['response'], level: 'info' },
    }
}
