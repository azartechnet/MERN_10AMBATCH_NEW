var fs=require('fs')
fs.writeFile('sample.txt',"hello",function(err){
    if(err) {
        console.log(err);
        }
    else
    {
        console.log("file created");
    }
    fs.readFile('sample.txt',function(err,data){
        if(err) {
            console.log(err);
        }
        else
        {
            console.log(data.toString());
        }
    })
})