
const addFood = document.querySelector("#submit");

const foodInput = document.querySelector("#food-input");

function fruitSort() {

  let item = foodInput.value;

  let text = document.createTextNode(item);
  console.log('Text Node', text);
  let newItem = document.createElement("li");

  newItem.appendChild(text);


  let radioValue = document.querySelector(
    'input[name="fruitOrVeggies"]:checked'
  ).value;



  radioValue === "fruit"
    ? document.querySelector("#fruits").appendChild(newItem)
    : document.querySelector("#veggies").appendChild(newItem);



  foodInput.value = "";
}

addFood.addEventListener("click", fruitSort);
