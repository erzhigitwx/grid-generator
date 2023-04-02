const defaultState = {
  input1: {
    id: "row1",
    value: "1fr",
  },
  input2: {
    id: "row2",
    value: "1fr",
  },
  input3: {
    id: "row3",
    value: "1fr",
  },
  input4: {
    id: "row4",
    value: "1fr",
  },
  input5: {
    id: "row5",
    value: "1fr",
  },
};

const CHANGE_INPUT1 = "CHANGE_INPUT1";
const CHANGE_INPUT2 = "CHANGE_INPUT2";
const CHANGE_INPUT3 = "CHANGE_INPUT3";
const CHANGE_INPUT4 = "CHANGE_INPUT4";
const CHANGE_INPUT5 = "CHANGE_INPUT5";

export function rowInputs(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_INPUT1:
      return { ...state, input1: { ...state.input1, value: action.payload } };
    case CHANGE_INPUT2:
      return { ...state, input2: { ...state.input2, value: action.payload } };
    case CHANGE_INPUT3:
      return { ...state, input3: { ...state.input3, value: action.payload } };
    case CHANGE_INPUT4:
      return { ...state, input4: { ...state.input4, value: action.payload } };
    case CHANGE_INPUT5:
      return { ...state, input5: { ...state.input5, value: action.payload } };
    default:
      return state;
  }
}

export const changeRowInput1 = (payload) => ({
  type: CHANGE_INPUT1,
  payload,
});
export const changeRowInput2 = (payload) => ({
  type: CHANGE_INPUT2,
  payload,
});
export const changeRowInput3 = (payload) => ({
  type: CHANGE_INPUT3,
  payload,
});
export const changeRowInput4 = (payload) => ({
  type: CHANGE_INPUT4,
  payload,
});
export const changeRowInput5 = (payload) => ({
  type: CHANGE_INPUT5,
  payload,
});
