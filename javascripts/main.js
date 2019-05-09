//module creates functionality on page load by calling function attaching listener to Make Sandwich
import listeners from './helpers/form-event-listeners.js';

const init = () => {
    listeners.sandwichBtnListener();
    };
init();