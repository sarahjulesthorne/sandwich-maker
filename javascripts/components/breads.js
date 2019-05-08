const breads = {
  italian: 1.00,
  glutenFree: 0.75,
  oat: 1.25,
  noBread: 0.00
};

const getBreads = () => {
  return breads;
};

const breadKeys = Array.from(getBreads().keys);

const addBreads = (ingredient) => {
  breadKeys.forEach((key) => {
    if (key === ingredient) {
      return getBreads().key;
    }
  });
};

export default {
  addBreads,
};
