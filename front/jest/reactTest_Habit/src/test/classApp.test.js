const ClassApp = require("../classApp");

describe("ClassApp", () => {
  let classApp;
  let habits;
  let habit;
  beforeEach(() => {
    classApp = new ClassApp();
    habits = [
      { id: 1, name: "Reading", count: 1 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ];
    habit = { id: 1, name: "Reading", count: 1 };
  });
  it("handleIncrement", () => {
    const new_habits = classApp.handleIncrement(habits, habit);
    expect(new_habits).toEqual([
      { id: 1, name: "Reading", count: habit.count + 1 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ]);
  });

  describe("handleDecrement", () => {
    it("countUPZeroHandleDecrement", () => {
      const new_habits = classApp.handleDecrement(habits, habit);
      expect(new_habits).toEqual([
        { id: 1, name: "Reading", count: habit.count - 1 },
        { id: 2, name: "Running", count: 0 },
        { id: 3, name: "Coding", count: 0 },
      ]);
    });

    it("countDownZeroHandleDecrement", () => {
      const zerohabit = { id: 2, name: "Running", count: 0 };
      const new_habits = classApp.handleDecrement(habits, zerohabit);
      expect(new_habits).toEqual([
        { id: 1, name: "Reading", count: habit.count },
        { id: 2, name: "Running", count: 0 },
        { id: 3, name: "Coding", count: 0 },
      ]);
    });
  });
});
