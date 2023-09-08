import { useState } from "react";

const UseAddTask = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  return {
    value: enteredValue,
    valueChangeHandler,
  };
};

export default UseAddTask;
