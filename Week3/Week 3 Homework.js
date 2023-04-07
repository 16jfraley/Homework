const { opendirSync } = require("fs");

let pizzaToppings = ['cheese', 'pepperoni', 'sausage', 'bacon'];

//list toppings, Bonus challenge
function listOfToppings(topp){
let topping = topp.slice(0, topp.length - 1).join(', ');
topping += ', and ' + topp[topp.length -1];
return topping
}

//greeting the customer
let gretting= "";
function greetCustomer (toppings){
for(let top of toppings){
gretting += " " + top;
}
console.log( `Welcome to Savvy's arraay of Pizza. Our toppings are:` + " " + listOfToppings(pizzaToppings));
};


//getting the order

function getPizaOrder (size,crust, ...toppings) {
console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up`)
return order = [size,crust,toppings]
};


//preparing the pizza

function preparePizza (arr){
  console.log(`One ${arr[0]} ${arr[1]} crust pizza with ${arr[2]}, NOW COOKING!!`);
 return pizza={size:arr[0],crust:arr[1],toppings:arr[2]};
};

//The pizza is ready
function sevrvePizza(pizza){
console.log(`Your pizza is ready! Here is your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}`)
};




greetCustomer(pizzaToppings);

getPizaOrder('large','thin', 'pepperoni', 'sausage');

preparePizza(order);

sevrvePizza(pizza);

