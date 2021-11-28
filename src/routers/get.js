const { route } = require("./person.route");
const { personController } = require("../controllers/person.controller");

module.exports = (request, response) => {
  try {
    if(route('/person', request)) return personController.getAll(request, response);
    if(route('/person/:id', request)) return personController.getById(request, response);
  
    response.statusCode = 404;
    response.write(`NOT FOUND ${request.query}`);
    response.end() 
  } catch (error) {
    response.statusCode = 500;
    response.write("500: Server Error");
    response.end();
  }
};