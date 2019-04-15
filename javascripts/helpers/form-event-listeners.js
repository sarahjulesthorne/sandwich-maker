const checkboxes = Array.from(document.getElementsByClassName('form-check-input'));

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
            });


}
else if (checkbox.value === 'none') {
    checkbox.addEventListener('change', (e) => {
e.preventDefault();
console.log(`You checked ${checkbox.id}`);
    });;


}
})
};




export default {formCheckboxListener};