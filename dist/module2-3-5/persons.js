"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_store_1 = require("./data-store");
const utils_1 = require("./utils");
const logPerson = (person) => {
    let information = '';
    if ((0, utils_1.isAdmin)(person)) {
        information = person.role;
    }
    if ((0, utils_1.isUser)(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
const filterUsers = (persons, criteria) => persons.filter(utils_1.isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => user[fieldName] === criteria[fieldName]);
});
console.log('Users of age 24:');
filterUsers(data_store_1.persons, {
    age: 24
}).forEach(logPerson);
