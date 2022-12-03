"use strict";
// Разработайте абстрактный базовый класс AbstractSelling, описывающий продажу товара.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    _product;
    _amount;
    constructor(_product, _amount) {
        this._product = _product;
        this._amount = _amount;
        this._product = _product;
        this._amount = _amount;
    }
    get product() {
        return this._product;
    }
    get amount() {
        return this._amount;
    }
    set changeProduct(_product) {
        this._product = _product;
    }
    set changeAmount(_amount) {
        this._amount = _amount;
    }
    compare(selling) {
        return this.getPrice() > selling.getPrice() ? -1 : this.getPrice() === selling.getPrice() ? 0 : 1;
    }
}
exports.AbstractSelling = AbstractSelling;
