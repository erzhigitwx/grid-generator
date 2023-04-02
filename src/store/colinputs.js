const defaultState = {
  input1: {
    id: "col1",
    value: "1fr",
  },
  input2: {
    id: "col2",
    value: "1fr",
  },
  input3: {
    id: "col3",
    value: "1fr",
  },
  input4: {
    id: "col4",
    value: "1fr",
  },
  input5: {
    id: "col5",
    value: "1fr",
  },
};

const CHANGE_INPUT_COL1 = "CHANGE_INPUT_COL1";
const CHANGE_INPUT_COL2 = "CHANGE_INPUT_COL2";
const CHANGE_INPUT_COL3 = "CHANGE_INPUT_COL3";
const CHANGE_INPUT_COL4 = "CHANGE_INPUT_COL4";
const CHANGE_INPUT_COL5 = "CHANGE_INPUT_COL5";

export function colInputs(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_INPUT_COL1:
      return { ...state, input1: { ...state.input1, value: action.payload } };
    case CHANGE_INPUT_COL2:
      return { ...state, input2: { ...state.input2, value: action.payload } };
    case CHANGE_INPUT_COL3:
      return { ...state, input3: { ...state.input3, value: action.payload } };
    case CHANGE_INPUT_COL4:
      return { ...state, input4: { ...state.input4, value: action.payload } };
    case CHANGE_INPUT_COL5:
      return { ...state, input5: { ...state.input5, value: action.payload } };
    default:
      return state;
  }
}

export const changeColInput1 = (payload) => ({
  type: CHANGE_INPUT_COL1,
  payload,
});
export const changeColInput2 = (payload) => ({
  type: CHANGE_INPUT_COL2,
  payload,
});
export const changeColInput3 = (payload) => ({
  type: CHANGE_INPUT_COL3,
  payload,
});
export const changeColInput4 = (payload) => ({
  type: CHANGE_INPUT_COL4,
  payload,
});
export const changeColInput5 = (payload) => ({
  type: CHANGE_INPUT_COL5,
  payload,
});
