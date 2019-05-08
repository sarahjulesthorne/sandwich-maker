import breads from '../components/breads.js';

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
console.log(ingredientObject.ingredientPrice);
allIngredients.push(ingredientObject);
prices.push(ingredientObject.ingredientPrice);

};

export default {selectAddFunction};