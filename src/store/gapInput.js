const defaultState = {
  rowGap: {
    value: 5,
  },
  colGap: {
    value: 5,
  },
};

const CHANGE_ROW_GAP = "CHANGE_ROW_GAP";
const CHANGE_COL_GAP = "CHANGE_COL_GAP";

export function gapInput(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_ROW_GAP:
      return { ...state, rowGap: { value: action.payload } };
    case CHANGE_COL_GAP:
      return { ...state, colGap: { value: action.payload } };
    default:
      return state;
  }
}

export const changeRowGapActionCreator = (payload) => ({
  type: CHANGE_ROW_GAP,
  payload,
});
export const changeColGapActionCreator = (payload) => ({
  type: CHANGE_COL_GAP,
  payload,
});
