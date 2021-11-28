const { checkIfValidUUID } = require('../helpers/checkIfValidUUID');
const personService = require('../service/person.service'); 
 
 class PersonController {

    getAll (request, response) {
        try {
            const result = personService.getAll();
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            response.end();
        } catch (error) {
            throw new Error();
        }
    };

    getById (request, response) {
        try {
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
        } catch (error) {
            throw new Error();
        }
    };

    create ( request, response) {
        try {
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
        } catch (error) {
            throw new Error();    
        }
    };

    update (request, response) {
        try {
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

        const result = personService.update(id, data);
        if(result === false) {
            response.statusCode = 404;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify('Not found'));
            response.end();
            return   
        }

        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(result));
        response.end();
        return
        } catch (error) {
            throw new Error();    
        }
    };

    remove (request, response) {
        try {       
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
        } catch (error) {
            throw new Error();    
        }
    };
    
};


module.exports.personController = new PersonController;