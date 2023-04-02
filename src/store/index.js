import { createStore, combineReducers } from "redux";
import { rowInputs } from "./rowInputs";
import { colInputs } from "./colinputs";
import { gapInput } from "./gapInput";

const rootReducer = combineReducers({
  rowInputs: rowInputs,
  colInputs: colInputs,
  gapInput: gapInput,
});

export const store = createStore(rootReducer);
