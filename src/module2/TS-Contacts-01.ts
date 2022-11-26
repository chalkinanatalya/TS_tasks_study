type User = {
  name: string,
  age: number,
  group: string
}

const persons: User[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },

  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },

  {
    name: 'Анна Анисимова',
    age: 22,
    group: 'Семья',
  },

  {
    name: 'Андрей Коваленко',
    age: 28,
    group: 'Друзья',
  },

  {
    name: 'Анастасия Кравченко',
    age: 25,
    group: 'Коллега',
  },
];

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users: ');
persons.forEach(logPerson);