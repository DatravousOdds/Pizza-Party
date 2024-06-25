// Note: There are 8 slices in a pizza

// const numberOfPeople = prompt("How many people?");
// const numberOfPizzas = prompt("How many pizzas do you have?");
// const slicesPerPerson = numberOfPizzas * 8 /  numberOfPeople;
// const remainderOfSlices = numberOfPizzas * 8 %  numberOfPeople;

let isNotNumeric = true;
while (isNotNumeric) {
  const numberOfPeople = prompt("How many people?");
  const numberOfPizzas = prompt("How many pizzas do you have?");

  const numOfPeople = parseInt(numberOfPeople);
  const numOfPizzas = parseInt(numberOfPizzas);

  if (!isNaN(numOfPeople) && !isNaN(numOfPizzas)) {
    const slicesPerPerson = numberOfPizzas * 8 / numberOfPeople;
    const remainderOfSlices = numberOfPizzas * 8 % numberOfPeople;
    console.log(`${numOfPeople} people with ${numOfPizzas} pizzas`);
    if (slicesPerPerson && remainderOfSlices > 1) {
      console.log(`Each person gets ${slicesPerPerson} pieces of pizza`);
      console.log(`There are ${Math.floor(remainderOfSlices)} leftover pieces`);
    } else {
      console.log(`Each person gets ${slicesPerPerson} piece of pizza`);
      console.log(`There are ${remainderOfSlices} leftover piece`);
    }




    isNotNumeric = false;
  }


}




