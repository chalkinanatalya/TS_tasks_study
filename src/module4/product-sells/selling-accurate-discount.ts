import { AbstractSelling } from "./abstract-selling";

const DISCOUNT = 10;
const EXCHANGE_RATE = 63;


export class SellingAccurateDiscount extends AbstractSelling {
    override getPrice(): number {
        return Number(((this.product.price - DISCOUNT * EXCHANGE_RATE) * this.amount).toFixed(2));
    }
}


