import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return (state += 1);
    case "Decrement":
      return (state -= 1);
    default:
      return state;
  }
};

const Counter = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrement = () => {
    dispatch({ type: "Increment" });
  };
  const onDecrement = () => {
    dispatch({ type: "Decrement" });
  };
  return (
    <>
      {number}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

export default Counter;
