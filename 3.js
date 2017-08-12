/**
 * Created by Administrator on 2017/8/11.
 */
//用require引入‘fs’模块
var fs = require('fs');
var number = fs.readFileSync(process.argv[2]);
var Type = number.toString();
var rows =Type.split('\n');
console.log(rows);
console.log(rows.length);