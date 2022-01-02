import React from "react";
import { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

const App = ({ classApp }) => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handleIncrement = (habit) => {
    setHabits(classApp.handleIncrement(habits, habit));
  };

  const handleDecrement = (habit) => {
    setHabits(classApp.handleDecrement(habits, habit));
  };

  const handleDelete = (habit) => {
    setHabits(classApp.handleDelete(habits, habit));
  };

  const handleAdd = (name) => {
    setHabits(classApp.handleAdd(habits, name));
  };

  const handleReset = () => {
    setHabits(classApp.handleReset(habits));
  };

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
