var f1=require('fs')
f1.readFile('f1.txt',function(err,data){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log(data.toString());
    }
})