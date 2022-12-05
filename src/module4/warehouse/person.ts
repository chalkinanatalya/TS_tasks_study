
import { Job } from "./job";

export class Person {
    constructor(_name: string);
    constructor(_name: string, _job: Job | undefined)
    constructor(private _name: string, private _job?: Job | undefined) {
        this._name = _name;
    }

    set job(_job: Job) {
        this._job = _job;
    }

    public getSalary() {
        if (this._job) {
            return this._job.salary;
        }
        return 'Работа не назначена, какая зарплата?'
    }

    public work() {
        if (this._job) {
            return `${this._name} обязан делать работу по профессии ${this._job.role}`
        }
        return 'Нет работы - не надо ничего делать'
    }
}


