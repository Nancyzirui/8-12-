/**
 * Created by Administrator on 2017/8/12.
 */
var http = require('http'); //引入http模块
http.get(process.argv[2],function callback(res) {
    res.setEncoding('utf-8');
    res.on('data', console.log);
    res.on('error', console.error);

})