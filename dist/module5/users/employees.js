"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_user_1 = require("./abstract-user");
class Employees extends abstract_user_1.Users {
}
const employees = new Employees();
employees.add({
    id: 1,
    firstname: 'Iren',
    lastname: 'Revova',
    age: 20,
    post: 'chemist'
});
employees.add({
    id: 2,
    firstname: 'Tom',
    lastname: 'Green',
    age: 25,
    post: 'teacher'
});
employees.add({
    id: 3,
    firstname: 'Sam',
    lastname: 'Stall',
    age: 27,
    post: 'manager'
});
employees.add({
    id: 4,
    firstname: 'Katty',
    lastname: 'Pie',
    age: 23,
    post: 'architecture'
});
employees.add({
    id: 5,
    firstname: 'Tatiana',
    lastname: 'Satko',
    age: 26,
    post: 'physicist'
});
console.log('get employer: ', employees.get(5));
console.log('remove employer: ', employees.remove(3));
console.log('remove employer: ', employees.remove(6));
console.log('employees: ', employees);
