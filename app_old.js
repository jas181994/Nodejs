
const http=require('http')
const server= http.createServer((req,res)=> {

res.statusCode=200;
res.setHeader('content','html')
res.end('<h1>hello world</h1>')

})

server.listen(3000,'127.0.0.1',()=>
{
    console.log('server is listening at port 3000');
}
);