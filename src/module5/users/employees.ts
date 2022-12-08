import { Users } from "./abstract-user";
import { EmployerInterface } from "./interface/employer-interface";

class Employees extends Users<EmployerInterface> { }

const employees = new Employees();

employees.add({
    id: 1,
    firstname: 'Iren',
    lastname: 'Revova',
    age: 20,
    post: 'chemist'
},
);

employees.add({
    id: 2,
    firstname: 'Tom',
    lastname: 'Green',
    age: 25,
    post: 'teacher'
},
);

employees.add({
    id: 3,
    firstname: 'Sam',
    lastname: 'Stall',
    age: 27,
    post: 'manager'
},
);

employees.add({
    id: 4,
    firstname: 'Katty',
    lastname: 'Pie',
    age: 23,
    post: 'architecture'
},
);

employees.add({
    id: 5,
    firstname: 'Tatiana',
    lastname: 'Satko',
    age: 26,
    post: 'physicist'
},
);


console.log('get employer: ', employees.get(5));

console.log('remove employer: ', employees.remove(3));
console.log('remove employer: ', employees.remove(6));
console.log('employees: ', employees);

console.log('sort employees: ', employees.sorted('down'));