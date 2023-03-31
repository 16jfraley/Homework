let pizzaPlace = "Savvy's array of Pizza";
let numOfToppings= 15;

console.log(pizzaPlace + " " +typeof(pizzaPlace));
console.log(numOfToppings + " " + typeof(numOfToppings));

console.log(`Hello, Welcome to ${pizzaPlace}, we have ${numOfToppings} toping for you to choose from!`);

if(numOfToppings<10){
  console.log("Quality, not quantity")
}else{
  console.log("A whole lot of pizza")
};


let num = 1;
while (num <= numOfToppings && num <=10){
  if(num % 2 == 0){
  console.log(num)
  }
num++;
}

