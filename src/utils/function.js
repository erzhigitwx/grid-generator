export const findInputRowValueById = (rowInputs, inputId) => {
  for (const inputKey in rowInputs) {
    if (inputId.includes(rowInputs[inputKey].id)) {
      return rowInputs[inputKey].value;
    }
  }
  return "1fr";
};

export const findInputColValueById = (colInputs, inputId) => {
  for (const inputKey in colInputs) {
    if (inputId.includes(colInputs[inputKey].id)) {
      return colInputs[inputKey].value;
    }
  }
  return "1fr";
};
