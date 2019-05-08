import breads from './components/breads.js';

import listeners from './helpers/form-event-listeners.js';
const sampleBread = breads.addBreads('italian');
const init = () => {
    // listeners.formCheckboxListener();
    console.log(sampleBread);
    breads.addBreads('oat');
    listeners.sandwichBtnListener();
};
init();