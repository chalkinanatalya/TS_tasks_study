"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    _name;
    _job;
    constructor(_name, _job) {
        this._name = _name;
        this._job = _job;
        this._name = _name;
    }
    set job(_job) {
        this._job = _job;
    }
    getSalary() {
        if (this._job) {
            return this._job.salary;
        }
        return 'Работа не назначена, какая зарплата?';
    }
    work() {
        if (this._job) {
            return `${this._name} обязан делать работу по профессии ${this._job.role}`;
        }
        return 'Нет работы - не надо ничего делать';
    }
}
exports.Person = Person;
