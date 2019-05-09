//module uses object at top of file, constructor builder function, and addCategory function to build object with information about selected ingredient

const breads = {
  italian: 1.00,
  glutenFree: 0.75,
  oat: 1.25,
  noBread: 0.00
};
//used to securely transfer data to other functions
const getBreads = () => {
  return breads;
};

//used to isolate keys in breads object
const breadKeys = Array.from(Object.keys(getBreads()));

//built constructor separately for cleaner code and use in add function
const breadsConstructor = (category, name, price) => {
const ingredient = {
ingredientCategory: category,
ingredientName: name,
ingredientPrice: price
};
return ingredient;
};

/*used forEach loop to check if the input passed in matches any of the keys in the category  object
if so, pulls certain information about input and the matching key's value and assigns them to variables
Uses those variables as arguments to build ingredient constructor
returns built object for use in form-interpreter.js
Note: used attribute value selector with querySelector to obtain label innerHTML for designated input*/
const addBreads = (ingredient) => {
  let callConstructor = {};
  let category = '';
  let name = '';
  let price = '';

  breadKeys.forEach((ingredientKey) => {
    if (ingredientKey === ingredient.id) {
      category = ingredient.name;
      name = document.querySelector(`label[for=${ingredient.id}]`).innerHTML;
price = getBreads()[ingredientKey];
    }
  });
  callConstructor = breadsConstructor(category, name, price);
  return callConstructor;
};

export default {
  addBreads
};