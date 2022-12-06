"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_user_1 = require("./abstract-user");
class Students extends abstract_user_1.Users {
}
const students = new Students();
students.add({
    id: 1,
    firstname: 'Iren',
    lastname: 'Revova',
    age: 20,
    year: 2020,
    specialty: 'chemist'
});
students.add({
    id: 2,
    firstname: 'Tom',
    lastname: 'Green',
    age: 25,
    year: 2018,
    specialty: 'teacher'
});
students.add({
    id: 3,
    firstname: 'Sam',
    lastname: 'Stall',
    age: 27,
    year: 2021,
    specialty: 'manager'
});
students.add({
    id: 4,
    firstname: 'Katty',
    lastname: 'Pie',
    age: 23,
    year: 2022,
    specialty: 'architecture'
});
students.add({
    id: 5,
    firstname: 'Tatiana',
    lastname: 'Satko',
    age: 26,
    year: 2019,
    specialty: 'physicist'
});
console.log('get student: ', students.get(5));
console.log('remove student: ', students.remove(3));
console.log('remove student: ', students.remove(6));
console.log('students: ', students);
