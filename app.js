const http = require("http");
require("url");
require('dotenv').config();

const {get, post, put, deletet} = require('./src/routers');
const getBody = require('./src/middleware/getBody');

const PORT = process.env.PORT || 8001;

const server = http.createServer();

server.on("request", (request, response) => {
  try {
    request.query = new URL(request.url, `http://${request.headers.host}`);
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
        response.statusCode = 404;
        response.write("NOT FOUND");
        response.end();
    }; 
  } catch (error) {
    response.statusCode = 500;
    response.write("500: Server Error");
    response.end();
  }    
});

server.listen(PORT, err => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`)
});