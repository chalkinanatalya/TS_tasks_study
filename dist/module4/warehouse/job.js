"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
class Job {
    _role;
    _salary;
    constructor(_role, _salary) {
        this._role = _role;
        this._salary = _salary;
        this._role = _role;
        this._salary = _salary;
    }
    get salary() {
        return this._salary;
    }
    get role() {
        return this._role;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this._role}`);
    }
}
exports.Job = Job;
