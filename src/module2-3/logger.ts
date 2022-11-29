import { persons } from "./data-store";
import { Person, User } from "./interface";
import { Admin } from "./interface";

const isAdmin = (person: Person): person is Admin => {
  return person.type === 'admin';
}

const isUser = (person: Person): person is User => {
  return person.type === 'user';
}

const logPerson = (person: Person) => {
  let information: string = '';
  if (isAdmin(person)) {
    information = person.role;
  }
  if (isUser(person)) {
    information = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
