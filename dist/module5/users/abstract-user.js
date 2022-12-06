"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    _userList = [];
    add(user) {
        this._userList.push(user);
    }
    remove(id) {
        if (this._userList.findIndex(user => user.id === id) === -1) {
            return false;
        }
        else {
            this._userList = this._userList.filter(user => user.id !== id);
            return true;
        }
    }
    get(id) {
        return this._userList.find(user => user.id === id) ?? null;
    }
    sorted(sortType = 'up') {
        let userList = [];
        sortType === 'up'
            ? userList = this._userList.sort((num1, num2) => num1.id - num2.id)
            : sortType === 'down'
                ? userList = this._userList.sort((num1, num2) => num2.id - num1.id)
                : false;
        return userList;
    }
}
exports.Users = Users;
