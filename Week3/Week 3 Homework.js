const { opendirSync } = require("fs");

let pizzaToppings = ['cheese', 'pepperoni', 'sausage', 'bacon'];

let gretting= "";
function greetCustomer (toppings){
for(let top of toppings){
gretting += " " + top;
}
return `Welcome to Savvy's arraay of Pizza. Our toppings are:` + " " + gretting;
};

console.log(greetCustomer(pizzaToppings))

let order = []
function getPizaOrder (size,crust, ...toppings) {
console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up`)
order.push(size,crust,toppings)
};
getPizaOrder('large','thin', 'pepperoni', 'cheese')
console.log(order)

let pizza={
  size:"",
  crust:"",
  toppings:"",

}
function preparePizza (arr){
  console.log(`One ${arr[0]} ${arr[1]} crust pizza with ${arr[2]}, NOW COOKING`);
  return pizza={size:arr[0],crust:arr[1],toppings:arr[2]}
};
console.log(preparePizza(order))

function sevrvePizza(pizza){
console.log(`Your pizza is ready! Here is your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}`)
}
console.log(sevrvePizza(pizza))
