"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _name;
    _price;
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
        this._name = _name;
        this._price = _price;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    set changeName(_name) {
        this._name = _name;
    }
    set changePrice(_price) {
        this._price = _price;
    }
}
exports.Product = Product;
