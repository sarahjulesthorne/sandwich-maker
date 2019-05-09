//module attaches listener to Make Sandwich button and adds initializeReadOut function
import interpreter from './form-interpreter.js';

const sandwichBtnListener = (e) => {
    document.getElementById('makeSandwichBtn').addEventListener('click', (e) => {
        e.preventDefault();
        interpreter.initializeReadOut();
    });
};

export default {
    // formCheckboxListener,
    sandwichBtnListener
};