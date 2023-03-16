import React from "react";

const Counter = (props) => {
  const { value } = props;
  const formatValue = () => {
    return value === 0 ? "Пока ничего не добавили" : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncriment = () => {
    props.onIncrement(props.id);
  };
  const handleDecriment = () => {
    props.onDecrement(props.id);
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncriment}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecriment}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Ингридиент не нужен
      </button>
    </div>
  );
};

export default Counter;
