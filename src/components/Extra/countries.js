const createData = (name, HDI, Gini, Population) => {
  return { name, HDI, Gini, Population };
};

const countries = [
  createData("Ireland", 0.995, 28.9, 4977400),
  createData("United Kingdom", 0.932, 33.5, 67886004),
  createData("France", 0.901, 28.5, 67406000),
  createData("Japan", 0.919, 33.9, 125410000),
  createData("Australia", 0.944, 34, 25790200),
  createData("New Zealand", 0.931, 33.9, 5127110),
];

export default countries;
