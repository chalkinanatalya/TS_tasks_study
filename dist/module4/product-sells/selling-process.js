"use strict";
// Для проверки работы приложения:
// - Создайте массив из 8 объектов (по 4 для каждого производного класса).
// - Отсортируйте объекты по убыванию с использованием метода Array.sort(AbstractPurchase.compare).
// - Выведите объекты в консоль.
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const selling_accurate_discount_1 = require("./selling-accurate-discount");
const selling_float_discount_1 = require("./selling-float-discount");
const phone = new product_1.Product('smartphone', 150_000);
const tv = new product_1.Product('tv', 50_000);
const oven = new product_1.Product('oven', 30_000);
const microwave = new product_1.Product('microwave', 20_000);
const dustCleaner = new product_1.Product('dust cleaner', 40_000);
const washingMachine = new product_1.Product('washing machine', 60_000);
const tablet = new product_1.Product('tablet', 70_000);
const fridge = new product_1.Product('fridge', 100_000);
const goods = [
    new selling_accurate_discount_1.SellingAccurateDiscount(phone, 3),
    new selling_accurate_discount_1.SellingAccurateDiscount(tv, 5),
    new selling_accurate_discount_1.SellingAccurateDiscount(oven, 8),
    new selling_accurate_discount_1.SellingAccurateDiscount(microwave, 9),
    new selling_float_discount_1.SellingFloatDiscount(dustCleaner, 10, 5),
    new selling_float_discount_1.SellingFloatDiscount(washingMachine, 7, 3),
    new selling_float_discount_1.SellingFloatDiscount(tablet, 4, 2),
    new selling_float_discount_1.SellingFloatDiscount(fridge, 3, 10),
];
const goodsPrice = Array.from(goods, item => `${item.product.name}: ${item.getPrice()}`);
console.log('originalGoods: ', goodsPrice);
const sortedGoods = goods.sort((item1, item2) => item1.compare(item2));
const sortedGoodsPrice = Array.from(sortedGoods, item => `${item.product.name}: ${item.getPrice()}`);
console.log('sortedGoods: ', sortedGoodsPrice);
