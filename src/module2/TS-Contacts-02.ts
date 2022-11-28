import { User } from "./TS-Contacts-01";

type Admin = {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;
