import { Person } from './interface';

export const persons: Person[] = [
  {
    type: 'user',
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },

  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },

  {
    type: 'user',
    name: 'Анна Анисимова',
    age: 22,
    group: 'Семья',
  },

  {
    type: 'user',
    name: 'Андрей Коваленко',
    age: 28,
    group: 'Друзья',
  },

  {
    type: 'user',
    name: 'Анастасия Кравченко',
    age: 25,
    group: 'Коллега',
  },

  {
    type: 'admin',
    name: 'Катя Админ',
    age: 26,
    role: 'Administrator',
  }
];
