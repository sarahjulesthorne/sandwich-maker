const checkboxes = Array.from(document.getElementsByClassName('form-check-input'));

const caller = () => {
formCheckboxListener();
};

const formCheckboxListener = () => {
checkboxes.forEach((checkbox) => {
if (checkbox.checked && checkbox.value !== 'none') {
    checkbox.addEventListener('change', (e) => {
        e.preventDefault();
        console.log(`You unchecked ${checkbox.id}`);
            })
}
else if (checkbox.checked && checkbox.value === 'none') {
    checkbox.addEventListener('change', (e) => {
        e.preventDefault();
        console.log(`You unchecked ${checkbox.id}`);
            });
    

}
else if (checkbox.value !== 'none') {
    checkbox.addEventListener('change', (e) => {
        e.preventDefault();
        console.log(`You checked ${checkbox.id}`);
        caller();
            });


}
else if (checkbox.value === 'none') {
    checkbox.addEventListener('change', (e) => {
e.preventDefault();
console.log(`You checked ${checkbox.id}`);
caller();
    });;


}
})
};




export default {formCheckboxListener};