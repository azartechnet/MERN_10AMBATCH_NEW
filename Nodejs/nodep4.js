var f1=require('fs')
f1.rename('sample.txt','f1.txt',function(err){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log("File renamed successfully");
    }
})