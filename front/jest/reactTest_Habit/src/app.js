class ClassApp {
  constructor() {
    this.habits = [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ];
  }

  handleIncrement(habit) {
    this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
  }

  handleDecrement(habit) {
    this.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
  }

  handleDelete(habit) {
    return this.habits.filter((item) => item.id !== habit.id);
  }

  // 아닐듯
  handleAdd(name) {
    return (this.habits = [...this.habits, { id: Date.now(), name, count: 0 }]);
  }

  handleReset(habits) {
    habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
  }
}

module.exports = ClassApp;
