class ClassApp {
  handleIncrement(habits, habit) {
    let new_habits = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    return new_habits;
  }

  handleDecrement(habits, habit) {
    const new_habits = habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    return new_habits;
  }

  handleDelete(habits, habit) {
    return habits.filter((item) => item.id !== habit.id);
  }

  handleAdd(habits, name) {
    return (habits = [...habits, { id: Date.now(), name, count: 0 }]);
  }

  handleReset(habits) {
    const new_habits = habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    return new_habits;
  }
}

module.exports = ClassApp;
