import React from "react";
import ContentInput from "./input";
import Block from "./block";
import { useSelector } from "react-redux";

const Content = () => {
  let items = [];
  for (let i = 1; i <= 25; i++) {
    items = [...items, i];
  }
  let ids = {};
  for (let item of items) {
    if (item <= 5) {
      ids[item] = `row1 col${item}`;
    } else if (item > 5 && item <= 10) {
      ids[item] = `row2 col${item - 5}`;
    } else if (item > 10 && item <= 15) {
      ids[item] = `row3 col${item - 10}`;
    } else if (item > 15 && item <= 20) {
      ids[item] = `row4 col${item - 15}`;
    } else if (item > 20 && item <= 25) {
      ids[item] = `row5 col${item - 20}`;
    }
  }

  const rowInputs = useSelector((state) => state.rowInputs);
  const colInputs = useSelector((state) => state.colInputs);
  const gridTemplateRows = Object.values(rowInputs)
    .map((input) => input.value)
    .join(" ");
  const gridTemplateColumns = Object.values(colInputs)
    .map((input) => input.value)
    .join(" ");

  // values of gaps
  const rowGap = useSelector((state) => state.gapInput.rowGap.value);
  const colGap = useSelector((state) => state.gapInput.colGap.value);
  return (
    <div className="content">
      <div className="inputs-row">
        <ContentInput id={"row1"} />
        <ContentInput id={"row2"} />
        <ContentInput id={"row3"} />
        <ContentInput id={"row4"} />
        <ContentInput id={"row5"} />
      </div>
      <div className="inputs-column">
        <ContentInput id={"col1"} />
        <ContentInput id={"col2"} />
        <ContentInput id={"col3"} />
        <ContentInput id={"col4"} />
        <ContentInput id={"col5"} />
      </div>
      {/*  */}
      <div
        className="container-item"
        style={{
          display: "grid",
          gridTemplateRows: gridTemplateColumns,
          gridTemplateColumns: gridTemplateRows,
          rowGap: rowGap,
          columnGap: colGap,
        }}
      >
        {items.map((id) => (
          <Block key={id} id={ids[id]} />
        ))}
      </div>
    </div>
  );
};

export default Content;