"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_store_1 = require("./data-store");
const isAdmin = (person) => {
    return person.type === 'admin';
};
const isUser = (person) => {
    return person.type === 'user';
};
const logPerson = (person) => {
    let information = '';
    if (isAdmin(person)) {
        information = person.role;
    }
    if (isUser(person)) {
        information = person.group;
    }
    console.log(` - ${person.name}, ${person.age}, ${information}`);
};
console.log('Admins:');
data_store_1.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
data_store_1.persons.filter(isUser).forEach(logPerson);
