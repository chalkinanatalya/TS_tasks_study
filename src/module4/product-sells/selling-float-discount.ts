import { AbstractSelling } from "./abstract-selling";
import { Product } from "./product";


export class SellingFloatDiscount extends AbstractSelling {

    constructor(_product: Product, _amount: number, private _amountDiscount: number) {
        super(_product, _amount);
        this._amountDiscount = _amountDiscount;
    }

    get amountDiscount() {
        return this._amountDiscount;
    }

    override getPrice(): number {
        if (this.amount >= this.amountDiscount) {
            return this.product.price * this.amount * 0.9;
        } else {
            return this.product.price * this.amount;
        }
    }
}