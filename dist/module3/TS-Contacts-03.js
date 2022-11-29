"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TS_Contacts_01_1 = require("../module2/TS-Contacts-01");
const isPersonType = (val) => 'role' in val;
const logPerson = (person) => {
    let information;
    if (isPersonType(person)) {
        information = person.role;
    }
    else {
        information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};
TS_Contacts_01_1.persons.forEach(logPerson);
