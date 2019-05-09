/*module does heavy lifting for functionality for app
uses selectAddFunction to call category modules' add functions
uses categoryReader to build arrays using selectAddFunction and constructors
Uses clear functions to reset form and readout for next press of Make Sandwich
Uses initializeReadOut to read inputs, obtain final price, print readout, and clear form*/

import breads from '../components/breads.js';
import stringBuilders from './dom-string-builder.js';


const noneBreads = document.getElementById('noBread');
const noneProteins = document.getElementById('noProtein');
const noneCheese = document.getElementById('noCheese');
const noneCondiments = document.getElementById('noCondiments');
const noneVeggies = document.getElementById('noVeggies');

const breadOptions = Array.from(document.getElementsByName('breads'));
const proteinOptions = Array.from(document.getElementsByName('proteins'));
const cheeseOptions = Array.from(document.getElementsByName('cheese'));
const condimentOptions = Array.from(document.getElementsByName('condiments'));
const veggyOptions = Array.from(document.getElementsByName('veggies'));

const allIngredients = [];
const checkedOptions = [];
const options = Array.from(document.getElementsByClassName('form-check-input'));
const prices = [];

//function takes input and uses its name attribute to determine which category module's add function to call
//uses push array method to add info obtained to designated arrays in order to build those arrays with each checked input
const selectAddFunction = (selectedItem) => {
let selectedFunction = '';
switch (selectedItem.name) {
case 'breads':
selectedFunction = breads.addBreads;
break;
default:
console.error('You broke it');
return selectedFunction;
}
const ingredientObject = selectedFunction(selectedItem);
allIngredients.push(ingredientObject);
prices.push(ingredientObject.ingredientPrice);
};

//created to handle function calls and array building for each checked item by category
//checks if the none option in the selected category is checked and pushes set object if so
//if not, loops over all checked items and calls selectAddFunction to build arrays with correct info
const categoryReader = (selectedNone, selectedArray, categoryName) => {
if (selectedNone.checked) {
const noneIngredient = {
ingredientCategory: categoryName,
ingredientName: `No ${categoryName} option selected`,
ingredientPrice: 0.00
};
allIngredients.push(noneIngredient);
}
else {
  selectedArray.forEach((ingredient) => {
    if (ingredient.checked) {
selectAddFunction(ingredient);
    }
  });
}
};

//loops over designated array and uses pop method to clear array of content in preparation for fresh use of form
const clearArray = (selectedArray) => {
selectedArray.forEach((item) => {
selectedArray.pop();
});
};

//uses looping over inputs and setting checked attributes of checked inputs to false to clear form for future use
//also calls clearArray function to clear prices and allIngredients array so readout will be clean for each use of form
const clearForm = () => {
options.forEach((option) => {
if (option.checked) {
  option.checked = false;
}
});
clearArray(prices);
clearArray(allIngredients);
};

//uses categoryReader function calls to read all checked inputs by category
//uses reduce method on prices array to come up with total price
//uses domStringBuilder to print readout to page
//uses clearForm function to ready form for future use
const initializeReadOut = () => {
categoryReader(noneBreads, breadOptions, 'breads');
categoryReader(noneProteins, proteinOptions, 'proteins');
categoryReader(noneCheese, cheeseOptions, 'cheeses');
categoryReader(noneCondiments, condimentOptions, 'condiments');
categoryReader(noneVeggies, veggyOptions, 'veggies');
const totalPrice = prices.reduce((a, b) => {
return a + b;
}, 0);
console.log(totalPrice);
stringBuilders.domStringBuilder(allIngredients, totalPrice);
clearForm();
};

export default {initializeReadOut};
