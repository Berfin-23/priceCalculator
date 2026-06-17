"use strict";

const calculateDiscount = (price, discountPercent) => {
  return (price * discountPercent) / 100;
};

const calculateTax = (priceAfterDiscount, taxPercent) => {
  return (priceAfterDiscount * taxPercent) / 100;
};

const calculateFinalPrice = (price, discountPercent, taxPercent) => {
  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxPercent);

  return priceAfterDiscount + tax;
};

const createPriceSummary = (price, discountPercent, taxPercent) => {
  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxPercent);
  const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);

  return {
    price,
    discount,
    tax,
    finalPrice,
  };
};

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));
