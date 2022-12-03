// Для проверки работы приложения:
// - Создайте массив из 8 объектов (по 4 для каждого производного класса).
// - Отсортируйте объекты по убыванию с использованием метода Array.sort(AbstractPurchase.compare).
// - Выведите объекты в консоль.

import { Product } from "./product";
import { SellingAccurateDiscount } from "./selling-accurate-discount";
import { SellingFloatDiscount } from "./selling-float-discount";

const phone = new Product('smartphone', 150_000);
const tv = new Product('tv', 50_000);
const oven = new Product('oven', 30_000);
const microwave = new Product('microwave', 20_000);
const dustCleaner = new Product('dust cleaner', 40_000);
const washingMachine = new Product('washing machine', 60_000);
const tablet = new Product('tablet', 70_000);
const fridge = new Product('fridge', 100_000);


const goods = [
    new SellingAccurateDiscount(phone, 3),
    new SellingAccurateDiscount(tv, 5),
    new SellingAccurateDiscount(oven, 8),
    new SellingAccurateDiscount(microwave, 9),
    new SellingFloatDiscount(dustCleaner, 10, 5),
    new SellingFloatDiscount(washingMachine, 7, 3),
    new SellingFloatDiscount(tablet, 4, 2),
    new SellingFloatDiscount(fridge, 3, 10),
]
const goodsPrice = Array.from(goods, item => `${item.product.name}: ${item.getPrice()}`);
console.log('originalGoods: ', goodsPrice);
const sortedGoods = goods.sort((item1, item2) => item1.compare(item2));
const sortedGoodsPrice = Array.from(sortedGoods, item => `${item.product.name}: ${item.getPrice()}`);
console.log('sortedGoods: ', sortedGoodsPrice);