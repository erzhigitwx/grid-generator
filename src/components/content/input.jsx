import { Input } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findInputColValueById,
  findInputRowValueById,
} from "../../utils/function";
import {
  changeColInput1,
  changeColInput2,
  changeColInput3,
  changeColInput4,
  changeColInput5,
} from "../../store/colinputs";
import {
  changeRowInput1,
  changeRowInput2,
  changeRowInput3,
  changeRowInput4,
  changeRowInput5,
} from "../../store/rowInputs";

const ContentInput = ({ id }) => {
  const rowInputs = useSelector((state) => state.rowInputs);
  const colInputs = useSelector((state) => state.colInputs);
  const toShowRowInput = findInputRowValueById(rowInputs, id);
  const toShowColInput = findInputColValueById(colInputs, id);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(
    id.includes("row") ? toShowColInput : toShowRowInput
  );
  const rowActionCreators = useMemo(
    () => ({
      row1: changeRowInput1,
      row2: changeRowInput2,
      row3: changeRowInput3,
      row4: changeRowInput4,
      row5: changeRowInput5,
    }),
    []
  );

  const colActionCreators = useMemo(
    () => ({
      col1: changeColInput1,
      col2: changeColInput2,
      col3: changeColInput3,
      col4: changeColInput4,
      col5: changeColInput5,
    }),
    []
  );
  const changeHandlerRow = useMemo(
    () => (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      if (rowActionCreators[id]) {
        dispatch(rowActionCreators[id](newValue));
      }
    },
    [id, dispatch, rowActionCreators]
  );

  const changeHandlerCol = useMemo(
    () => (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);

      if (colActionCreators[id]) {
        dispatch(colActionCreators[id](newValue));
      }
    },
    [id, dispatch, colActionCreators]
  );

  return (
    <div className="content-input">
      <Input
        style={{
          width: "60px",
          color: "#ffffff",
          padding: "0 4px",
        }}
        className="mui-input"
        value={inputValue}
        onChange={
          id.includes("row")
            ? (e) => changeHandlerRow(e)
            : (e) => changeHandlerCol(e)
        }
      />
    </div>
  );
};

export default ContentInput;
