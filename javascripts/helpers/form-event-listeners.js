// import utils from './utils.js';

// const checkboxes = Array.from(document.getElementsByClassName('form-check-input'));

// const callerFunctions = (e) => {
//     if (e.target.checked && e.target.value !== 'none') {
//         e.preventDefault();
//         console.log(`checked ${e.target.id}`);
//     } else if (e.target.checked && e.target.value === 'none') {
//         e.preventDefault();
//         console.log(`checked ${e.target.id}`);
//     } else if (!e.target.checked && e.target.value !== 'none') {
//         e.preventDefault();
//         console.log(`unchecked ${e.target.id}`);
//     } else if (!e.target.checked && e.target.value === 'none') {
//         e.preventDefault();
//         console.log(`unchecked ${e.target.id}`);
//     }

// };

// const formCheckboxListener = () => {
//     checkboxes.forEach((checkbox) => {
//         checkbox.addEventListener('change', callerFunctions)
//     })
// };


// // const caller = () => {
// // formCheckboxListener();
// // };

// // const formCheckboxListener = () => {
// // checkboxes.forEach((checkbox) => {
// // if (checkbox.checked && checkbox.value !== 'none') {
// //     checkbox.addEventListener('change', (e) => {
// //         e.preventDefault();
// //         console.log(`You unchecked ${checkbox.id}`);
// // caller();

// //             })
// // }
// // else if (checkbox.checked && checkbox.value === 'none') {
// //     checkbox.addEventListener('change', (e) => {
// //         e.preventDefault();
// //         console.log(`You unchecked ${checkbox.id}`);
// // caller();

// //             });


// // }
// // else if (checkbox.value !== 'none') {
// //     checkbox.addEventListener('change', (e) => {
// //         e.preventDefault();
// //         console.log(`You checked ${checkbox.id}`);
// //         caller();
// //             });


// // }
// // else if (checkbox.value === 'none') {
// //     checkbox.addEventListener('change', (e) => {
// // e.preventDefault();
// // console.log(`You checked ${checkbox.id}`);
// // caller();
// //     });;


// // }
// // })
// // };


// const sandwichBtnListener = (e) => {
//     document.getElementById('makeSandwichBtn').addEventListener('click', (e) => {
//         e.preventDefault();
//         utils.printToDom('sandwichContainer', 'Clicked Sandwich Button');
//     });
// };

// export default {
//     formCheckboxListener,
//     sandwichBtnListener
// };