import listeners from './helpers/form-event-listeners.js';
const init = () => {
    listeners.formCheckboxListener();
    listeners.sandwichBtnListener();
};
init();