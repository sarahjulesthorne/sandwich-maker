import breads from './components/breads.js';
import domStringBuilders from './helpers/dom-string-builder.js';
import listeners from './helpers/form-event-listeners.js';

const sampleArray = [{
    itemCategory: 'bread',
    itemName: 'Italian',
    itemPrice: 1.25
}];
const sampleBread = document.getElementById('italian');

const init = () => {
    // listeners.formCheckboxListener();
console.log(breads.addBreads(sampleBread).ingredientCategory);
    
    listeners.sandwichBtnListener();
    domStringBuilders.domStringBuilder(sampleArray, 15.00);
};
init();