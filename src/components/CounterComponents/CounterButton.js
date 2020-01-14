import React from "react";

const CounterButton = props => {
  const onClickFn = () => {
    props.updateCount();
  };

  return <button onClick={onClickFn}>{props.text}</button>;
};

export default CounterButton;
