// const h1=require('http')
// const server=h1.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Welcome to the Application')
// }).listen(8081)
// console.log("Server is Running..")

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to the Application\n');
    res.write('This is a multi-line response.\n');
    res.write('Enjoy your stay!\n');
    res.end(); // End the response
});

server.listen(8081, () => {
    console.log("Server is Running on port 8081...");
});
