import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeColGapActionCreator,
  changeRowGapActionCreator,
} from "../../store/gapInput";
import Modal from "./modal/modal";

const MainBar = () => {
  const rowGap = useSelector((state) => state.gapInput.rowGap.value);
  const colGap = useSelector((state) => state.gapInput.colGap.value);
  const dispatch = useDispatch();
  const rowInputs = useSelector((state) => state.rowInputs);
  const colInputs = useSelector((state) => state.colInputs);
  const gridTemplateRows = Object.values(rowInputs)
    .map((input) => input.value)
    .join(" ");
  const gridTemplateColumns = Object.values(colInputs)
    .map((input) => input.value)
    .join(" ");

  const [modal, setModal] = useState(false);

  function rowChangeHandler(e) {
    if (rowGap === 0) {
      dispatch(changeRowGapActionCreator(Number(e.target.value) + 1));
    } else if (rowGap !== 50) {
      dispatch(changeRowGapActionCreator(Number(e.target.value)));
    } else {
      dispatch(changeRowGapActionCreator(Number(e.target.value) - 1));
    }
  }
  function colChangeHandler(e) {
    if (colGap === 0) {
      dispatch(changeColGapActionCreator(Number(e.target.value) + 1));
    } else if (colGap !== 50) {
      dispatch(changeColGapActionCreator(Number(e.target.value)));
    } else {
      dispatch(changeColGapActionCreator(Number(e.target.value) - 1));
    }
  }
  const code = `.parent{
    display: grid;
    grid-template-rows: ${gridTemplateRows};
    grid-template-columns: ${gridTemplateColumns};
    row-gap: ${rowGap}px;
    column-gap: ${colGap}px;
  }`;
  return (
    <div className="mainbar-wrap">
      {(modal && <Modal setModal={setModal} code={code} lng={"css"} />) || (
        <div className="mainbar">
          <div className="mainbar-row__gap">
            <h3 className="mainbar-row__gap-text">row gap(in px)</h3>
            <Input
              type="number"
              placeholder={rowGap}
              value={rowGap}
              onChange={(e) => rowChangeHandler(e)}
              style={{ padding: "0 4px", color: "#FFFFFF" }}
            />
          </div>
          <div className="mainbar-column__gap">
            <h3 className="mainbar-column__gap-text">column gap(in px)</h3>
            <Input
              type="number"
              placeholder={colGap}
              value={colGap}
              onChange={(e) => colChangeHandler(e)}
              style={{ padding: "0 4px", color: "#FFFFFF" }}
            />
          </div>
          <div className="units">
            units: <li className="item">fr</li>
            <li className="item">px</li>
            <li className="item">em</li>
            <li className="item">rem</li>
            <li className="item">vw</li>
            <li className="item">vh</li>
          </div>
          <div className="buttons">
            <Button
              className="button__see-code"
              onClick={() => setModal(!modal)}
            >
              let's generate code
            </Button>
            <Button
              className="button-reset"
              onClick={() => window.location.reload()}
            >
              reset
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainBar;
