const coffeeMenu = require("./coffee_data");

  //2. Print an array of all the drinks on the menu.
 const printName = (coffeeMenu) => {
     return coffeeMenu.name;
 }

console.log(coffeeMenu.map(printName));

 //3. Prints an array of drinks that cost 5 and under.

const printPrice = (coffeeMenu) => {
    return coffeeMenu.price <=5;
};

const onlyUnder = coffeeMenu.filter(printPrice);
console.log(onlyUnder);

 //4. Prints an array of drinks that are priced at an even number.
const evenPrice = coffeeMenu.filter(drink => drink.price % 2 === 0); 
    console.log(evenPrice)
    

//5. Prints the total cost if they were to order one of every drink.

const totalPrice = coffeeMenu.reduce((total, item) => {
    return total + item.price

}, 0)
console.log(totalPrice)

//6. Prints an array of all the drinks that are seasonal.

const seasonal = coffeeMenu.filter(drink => drink.seasonal)
console.log(coffeeMenu)











































module.imports = coffeeMenu