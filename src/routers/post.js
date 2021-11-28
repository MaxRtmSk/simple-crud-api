const {route} = require("./person.route");
const { personController } = require("../controllers/person.controller");

module.exports = (request, response) => {
    
  if(route('/person', request)) return personController.create(request, response);
   
  response.statusCode = 404;
  response.write(`NOT FOUND ${request.query}`);
  response.end();
};