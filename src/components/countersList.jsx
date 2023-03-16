import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Котлета", price: "200" },
    { id: 1, value: 0, name: "Сыр" },
    { id: 2, value: 0, name: "Халапеньо" },
    { id: 3, value: 0, name: "Хрустящий лук" },
    { id: 4, value: 0, name: "Бекон" },
    { id: 5, value: 0, name: "Пармезан" },
    { id: 6, value: 0, name: "Салат" },
    { id: 7, value: 0, name: "Томат" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("handleReset");
  };
  const handleIncriment = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };
  const handleDecriment = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };
  return (
    <div className=" container d-flex flex-column justify-content-center">
    <h1 className="text-success ">Собери свой бургер: </h1>
      {counters.map((count) => (
        <Counter
          onDelete={handleDelete}
          onIncrement={handleIncriment}
          onDecrement={handleDecriment}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2 w-25" onClick={handleReset}>
        Сброс
      </button>
    </div>
  );
};
<></>;
export default CountersList;
