"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingFloatDiscount = void 0;
const abstract_selling_1 = require("./abstract-selling");
class SellingFloatDiscount extends abstract_selling_1.AbstractSelling {
    _amountDiscount;
    constructor(_product, _amount, _amountDiscount) {
        super(_product, _amount);
        this._amountDiscount = _amountDiscount;
        this._amountDiscount = _amountDiscount;
    }
    get amountDiscount() {
        return this._amountDiscount;
    }
    getPrice() {
        if (this.amount >= this.amountDiscount) {
            return this.product.price * this.amount * 0.9;
        }
        else {
            return this.product.price * this.amount;
        }
    }
}
exports.SellingFloatDiscount = SellingFloatDiscount;
