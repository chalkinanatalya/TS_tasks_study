// Разработайте абстрактный базовый класс AbstractSelling, описывающий продажу товара.

import { Product } from "./product";

export abstract class AbstractSelling {
    constructor(private _product: Product, private _amount: number,) {
        this._product = _product;
        this._amount = _amount;
    }

    get product() {
        return this._product;
    }

    get amount() {
        return this._amount;
    }

    set changeProduct(_product: Product) {
        this._product = _product;
    }

    set changeAmount(_amount: number) {
        this._amount = _amount;
    }

    abstract getPrice(): number;

    public compare(selling: AbstractSelling) {
        return this.getPrice() > selling.getPrice() ? -1 : this.getPrice() === selling.getPrice() ? 0 : 1;
    }
}