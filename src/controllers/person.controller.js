const { checkIfValidUUID } = require('../helpers/checkIfValidUUID');
const personService = require('../service/person.service'); 
 
 class PersonController {

    getAll (request, response) {
        const result = personService.getAll();
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(result));
        response.end();
    };

    getById (request, response) {
        const id = request.url.split('/')[2];
        if(!checkIfValidUUID(id)){
            response.statusCode = 400;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify('UUID not true'));
            response.end();
            return
        }
        const result = personService.getById(id);
        
        if (result === undefined) {
            response.statusCode = 404;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify('Not found'));
            response.end();
            return
        } else {
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            response.end();
            return
        }
    };

    create ( request, response) {
        const { name, age, hobbies } = request.body;
        
        if(name === undefined || typeof name !== "string" || age === undefined || typeof age !== "number" || hobbies === undefined){
            response.statusCode = 400;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify('Does not contain required fields'));
            response.end();
            return
        }

        const data = {
            name,
            age,
            hobbies
        };

        const result = personService.create(data);

        response.statusCode = 201;
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(result));
        response.end();
        return
    };

    update (request, response) {
        const id = request.url.split('/')[2];
        if(!checkIfValidUUID(id)){
            response.statusCode = 400;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify('UUID not true'));
            response.end();
            return
        }
        const { name, age, hobbies } = request.body;

        const data = {
            name,
            age,
            hobbies
        };

        const result = personService.update(id, data)

        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(result));
        response.end();
    };

    remove (request, response) {
        const id = request.url.split('/')[2];
        if(!checkIfValidUUID(id)){
            response.statusCode = 400;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify('UUID not true'));
            response.end();
            return
        }
        
        const result = personService.remove(id);
        if(result){
            response.statusCode = 204;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            response.end();
            return
        } else {
            response.statusCode = 404;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify('Not found'));
            response.end();
        }
    };
    
};


module.exports.personController = new PersonController;