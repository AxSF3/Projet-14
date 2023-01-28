let actualDate = new Date();
let ACTUAL_YEAR = actualDate.getFullYear();
let ACTUAL_FRENCH_DATE = actualDate.toLocaleDateString("fr");

const dateService = {
  ACTUAL_YEAR,
  ACTUAL_FRENCH_DATE,
};

export default dateService;
