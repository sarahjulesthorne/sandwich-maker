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

const clearArray = (selectedArray) => {
selectedArray.forEach((item) => {
  if (selectedArray.length) {
selectedArray.pop();
  }
});
};

const clearForm = () => {
options.forEach((option) => {
if (option.checked) {
  option.checked = false;
}
});
clearArray(prices);
clearArray(allIngredients);
};

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