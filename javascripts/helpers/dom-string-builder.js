//module creates readout to be printed to page when Make Sandwich is clicked
import util from './utils.js';

//used domString to build up readout of Bootstrap table
const domStringBuilder = (selectedArray, finalPrice) => {
  let domString = '';

  domString += `<div class="row">`;
  domString += `<div class="display-flex col-12"></div>`;
  domString += `<h3 class="w-100 text-center">Your Sandwich</h3>`;
  domString += `<div class="table-responsive">`;
  domString += `<table class="table">`;
  domString += `<thead>`;
  domString += `<tr>`;
  domString += `<th scope="col">Category</th>`;
  domString += `<th scope="col">Ingredient</th>`;
  domString += `<th scope="col">Price</th>`;
  domString += `</tr>`;
  domString += `</thead>`;
  domString += `<tbody>`;
  selectedArray.forEach((ingredient) => {
    domString += `<tr>`;
    domString += `<td>${ingredient.ingredientCategory.toUpperCase()}</td>`;
    domString += `<td>${ingredient.ingredientName}</td>`;
    domString += `<td>$${ingredient.ingredientPrice}</td>`;
    domString += `</tr>`;
  });
  domString += `</tbody>`;
  domString += `</table>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `</div>`;
  domString += `<div class="row">`;
  domString += `<div class="col-12 display-flex">`;
  domString += `<h3 class="w-100 text-center">Your Total</h3>`;
  domString += `<p class="w-100 text-center">$${finalPrice}</p>`;
  domString += `</div>`;
  domString += `</div>`;
  util.printToDom('sandwichContainer', domString);
};

export default {
  domStringBuilder
};