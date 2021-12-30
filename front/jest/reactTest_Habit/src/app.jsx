import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

const App = ({ classApp }) => {
  const [habits, setHabits] = useState(classApp.habits);

  const handleIncrement = useCallback((habit) => {
    setHabits(classApp.handleIncrement(habit));
  }, []);

  const handleDecrement = useCallback((habit) => {
    setHabits(classApp.handleDecrement(habit));
  }, []);

  const handleDelete = useCallback((habit) => {
    setHabits(classApp.handleDelete(habit));
  }, []);

  const handleAdd = useCallback((name) => {
    setHabits(classApp.handleAdd(name));
  }, []);

  const handleReset = useCallback(() => {
    setHabits(classApp.handleReset(habits));
  }, []);

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
