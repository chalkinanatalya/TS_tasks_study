export class Job {
    constructor(private _role: string, private _salary: number) {
        this._role = _role;
        this._salary = _salary;
    }

    get salary(): number {
        return this._salary;
    }

    get role(): string {
        return this._role;
    }

    public work(personName: string) {
        console.log(`${personName} сейчас работает как ${this._role}`);

    }
}

