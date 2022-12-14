import { UserInterface } from "./interface/user-interface";

export abstract class Users<T extends UserInterface> {
    private _userList: T[] = [];

    public add(user: T): void {
        this._userList.push(user)
    }

    public remove(id: number): boolean {
        if (this._userList.findIndex(user => user.id === id) === -1) {
            return false
        } else {
            this._userList = this._userList.filter(user => user.id !== id);
            return true;
        }
    }

    public get(id: number): T | null {
        return this._userList.find(user => user.id === id) ?? null;
    }


    public sorted(sortType = 'up'): T[] {
        let userList: T[] = [];
        sortType === 'up'
            ? userList = this._userList.sort((num1, num2) => num1.id - num2.id)
            : sortType === 'down'
                ? userList = this._userList.sort((num1, num2) => num2.id - num1.id)
                : false;

        return userList;
    }
}