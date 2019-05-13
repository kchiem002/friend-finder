//you must require http and then pass in the createServer function
const { createServer } = require('http')

//create server and then tell it to listen on port 3000
  //2 parameters that for call back is req and res
createServer((req, res) => {
  //to return HTML; res = response
  res.end('<h1>Hello World</h1>')
}).listen(3000)