// const hello = 'Hello World';
// console.log(hello)

// const http = require('http')


const fs = require('fs');
const url = require('url')

// const data = fs.readFileSync('./final.txt', 'utf-8')
// console.log(data)

// const updateText = `${data}\nAll same data Create on ${Date.now()}`
// fs.writeFileSync('./hello.txt', updateText)
// console.log(updateText)

// fs.readFile('./final.txt', 'utf-8',(err, data)=>{
//     console.log(data)

// })
// console.log('reading file .......')

// const server = http.createServer((req, res)=>{
//     const pathName = req.url;
//     console.log(req.url)
//     if(pathName=== '/' || pathName === '/overview'){
//         res.end('this is the overview page')
//     }
//     else if(pathName=== '/product'){
//         res.end('this is the product page')
//     }
//     else if(pathName=== '/samples'){
//         res.end('this is the samples page')
//     }
//     else{
//         // console error show
//         res.writeHead('404')   
//         // document error show hs nahi hy
//         res.end('page not found')
//     }

// })

// const server = require('http').createServer();
// server.on('request', (req, res)=>{
//     fs.readFile('./textFiles/dev.txt', (err,data)=>{
//         if(err) console.log(err);
//         res.end(data)
//     })
    
// })

// server.listen('8000', '127.0.0.1',()=>{
//     console.log('Listening kr rha hy 8000 pr ')
// })

// Another way to create 
s