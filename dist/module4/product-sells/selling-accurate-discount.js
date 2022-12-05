"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellingAccurateDiscount = void 0;
const abstract_selling_1 = require("./abstract-selling");
const DISCOUNT = 10;
const EXCHANGE_RATE = 63;
class SellingAccurateDiscount extends abstract_selling_1.AbstractSelling {
    getPrice() {
        return Number(((this.product.price - DISCOUNT * EXCHANGE_RATE) * this.amount).toFixed(2));
    }
}
exports.SellingAccurateDiscount = SellingAccurateDiscount;
