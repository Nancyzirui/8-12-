/**
 * Created by Administrator on 2017/8/11.
 */
var i = 0;
process.argv.forEach(function (a,b) {
        if (b>=2){
            i = Number(process.argv[b])+i;
        }
})
console.log(i);