import { persons } from "../module2/TS-Contacts-01";
import { Person } from "../module2/TS-Contacts-02";
import { Admin } from "../module2/TS-Contacts-02";

const isPersonType = (val: Person): val is Admin => 'role' in val;

const logPerson = (person: Person) => {
  let information: string;
  if (isPersonType(person)) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);
