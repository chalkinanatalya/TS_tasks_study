import { persons } from "./data-store";
import { Person, User } from "./interface";
import { isAdmin, isUser } from "./utils";

const logPerson = (person: Person) => {
  let information = '';

  if (isAdmin(person)) {
    information = person.role;
  }

  if (isUser(person)) {
    information = person.group;
  }

  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

const filterUsers = (persons: Person[], criteria: { [key in keyof User]?: string | number }): User[] =>
  persons.filter(isUser).filter((user) => {
    const criteriaKeys = Object.keys(criteria) as (keyof User)[];
    return criteriaKeys.every((fieldName) => user[fieldName] === criteria[fieldName]);
  });

console.log('Users of age 24:');

filterUsers(
  persons,
  {
    age: 24
  }
).forEach(logPerson);

const filterPersons = (persons: Person[], criteria: { [key in keyof Person]?: string | number }): Person[] =>
  persons.filter((person) => {
    const criteriaKeys = Object.keys(criteria) as (keyof Person)[];
    return criteriaKeys.every((fieldName) => person[fieldName] === criteria[fieldName]);
  });


console.log('Persons of age 24:');


filterPersons(
  persons,
  {
    age: 24
  }
).forEach(logPerson);
