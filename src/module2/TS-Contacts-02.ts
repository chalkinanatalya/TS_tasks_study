
interface User {
    name: string,
    age: number,
    group: string
  }

export interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person =  User | Admin;
