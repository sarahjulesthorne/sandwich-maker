const checkboxes = Array.from(document.getElementsByClassName('form-check-input'));


const formCheckboxListener = () => {

    checkboxes.forEach((checkbox) => {
checkbox.addEventListener('change', (e) => {

if (e.target.checked && e.target.value !== 'none') {
console.log(`You unchecked ${e.target.id}`)
}
else if (e.target.checked && e.target.value === 'none') {
console.log(`You unselected a none option`);
}
else if (checkbox.value !== 'none') {
console.log(e.target.id)
}
else {
    console.log(e.target.id)
}

});
    })
};



export default {formCheckboxListener};