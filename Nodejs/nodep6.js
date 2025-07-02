var f1=require('fs')
//Synchrous
var data=f1.readFileSync('f1.txt','utf8')
console.log(data.toString())

//Asynchrouse read

f1.readFile('f1.txt','utf8',function(err,data){
    if(err)
        console.log(err)
    else
    console.log(data)
})