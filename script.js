const numberOfPeople = prompt("How many people?");
const numberOfPizzas = prompt("How many pizzas do you have?");

prompt = (`${numberOfPeople} people with ${numberOfPizzas} pizzas`);

// Note: There are 8 slices in a pizza

let slicesPerPerson = numberOfPizzas * 8 / numberOfPeople;
console.log(slicesPerPerson);