const {randomUUID} = require('crypto');
const persons = require('../db/persons');

const getAll = () => {
    return persons
};

const getById = (id) => {
    return persons.find((person) =>  person.id === id);
};

const create = (data) => {
    persons.push({id: randomUUID() , ...data});
    return persons[persons.length-1];
};

const update = (id, updatePerson) => {
    persons.forEach((person, index) => {
        if (person.id === id) {
          persons[index].name = updatePerson.name;
          persons[index].age = updatePerson.age;
          persons[index].hobbies = updatePerson.hobbies;
        }
      });
    return getById(id)
};

const remove = (id) => {
    const removeIndex = persons.map((person) => person.id).indexOf(id);
    if (removeIndex === -1) {
      return false
    }
    persons.splice(removeIndex, 1);
    return true
};

module.exports = {getAll, getById, create, update, remove};