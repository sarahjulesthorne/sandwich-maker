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

const addBreads = (ingredient) => {
  let breadPrice = '';
  breadKeys.forEach((ingredientKey) => {
    if (ingredientKey === ingredient) {
      breadPrice = getBreads()[ingredientKey];
    }
  });
  return breadPrice;
};

export default {
  addBreads
};