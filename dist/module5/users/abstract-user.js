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
}
exports.Users = Users;
