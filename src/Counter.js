import React, { useState } from "react";

export const Counter = () => {
  //let count=0;

  //React Hooks-Some special functions
  const [count, setCount] = useState(0);

  const onClickPlusHandler = () => {
    setCount(count + 1);

    console.log(count);
  };

  const onClickMinusHandler = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <React.Fragment>
      <h3>{count}</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onClickPlusHandler}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={onClickMinusHandler}
      >
        -
      </button>
    </React.Fragment>
  );
};
