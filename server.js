const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req, res)=>{

//console.log(req.url, req.method);


//lodash 

const num = _.random(0,20);

console.log(num);

//set header content type
res.setHeader('content-type','text/html');

let path = './views/';


switch(req.url){

    case '/':
        path+='index.html'
        res.statusCode =200;
        break;

    case'/about':
        path+='about.html'
        res.statusCode =200;
        break;

    case'/about-me':
        res.statusCode = 301;
        res.setHeader('Location','/about')
        res.end()
        break;

    default:
        path+='404.html'
        res.statusCode = 404;
        break;
}

//send an html file
//read file then send

fs.readFile(path,(err,data)=>{
if(err){
    console.log(err);
    res.end();
}else{
    console.log('send page')
    res.write(data);
    res.end();
}

})


});


server.listen(4000,'localhost',()=>{
console.log("Server listening at port 4000!")

});