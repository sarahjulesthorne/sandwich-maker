const breads = {
  italian: 1.00,
  glutenFree: 0.75,
  oat: 1.25,
  noBread: 0.00
};

const getBreads = () => {
  return breads;
};

const breadKeys = Array.from(Object.keys(getBreads()));

const breadsConstructor = (category, name, price) => {
const ingredient = {
ingredientCategory: category,
ingredientName: name,
ingredientPrice: price
};
return ingredient;
};

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