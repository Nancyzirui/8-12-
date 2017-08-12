/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var path = require('path');//path模块
//process.argv[2] 你输入第三个字符串
fs.readdir(process.argv[2], function callback(err, list) {
    list.forEach(function (file) {
        //当文件的后缀名与你输入的第四个字符串一样，输出这个文件
        if (path.extname(file) === process.argv[3]){
            console.log(file);
        }
    });
});