const http = require("http");
require("url");
require('dotenv').config();

const {get, post, put, deletet} = require('./src/routers');
const getBody = require('./src/middleware/getBody');

const PORT = process.env.PORT || 8001;

const server = http.createServer();

server.on("request", (request, response) => {
    request.query = new URL(request.url, `http://${request.headers.host}`);
    
    try {
      
    
    switch (request.method) {
      case "GET":
        getBody(request, response, get);
        break
  
      case "POST":
        getBody(request, response, post);
        break
  
      case "PUT":
        getBody(request, response, put);
        break
  
      case "DELETE":
        getBody(request, response, deletet);
        break
  
      default:
        response.statusCode = 400;
        response.write("No Response");
        response.end();
    };
  } catch (error) {
      
  }
  })


// server.on('error', () => {
//   console.log('eeerrror');
// });

// process.on('uncaughtException', () => {
//   console.log('eeeeeeeeeeeeee');
// })

server.listen(PORT, err => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`)
});