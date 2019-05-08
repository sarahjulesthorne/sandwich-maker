import breads from './components/breads.js';
import domStringBuilders from './helpers/dom-string-builder.js';
import listeners from './helpers/form-event-listeners.js';

const sampleArray = [{
    itemCategory: 'bread',
    itemName: 'Italian',
    itemPrice: 1.25
}];
const sampleBread = breads.addBreads('italian');
const init = () => {
    // listeners.formCheckboxListener();
    console.log(sampleBread);
    breads.addBreads('oat');
    listeners.sandwichBtnListener();
    domStringBuilders.domStringBuilder(sampleArray, 15.00);
};
init();