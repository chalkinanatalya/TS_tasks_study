export class Product  {
    constructor(private _name: string, private _price: number,) {
        this._name = _name;
        this._price = _price;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    set changeName(_name: string) {
        this._name = _name;
    }

    set changePrice(_price: number) {
        this._price = _price;
    }
}

