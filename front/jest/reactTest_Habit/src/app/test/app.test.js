import React from "react";
import App from "../app";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import HabitPresenter from "../test/habit_presenter";

describe("App test", () => {
  let presenter;
  beforeEach(() => {
    presenter = new HabitPresenter([
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 1 },
    ]);
  });

  it("render", () => {
    const component = renderer.create(<App presenter={presenter} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Componet test", () => {
    beforeEach(() => {
      render(<App presenter={presenter} />);
    });

    it("counts only active habits", () => {
      const button = screen.getAllByTitle("increment")[0];
      userEvent.click(button);
      const count = screen.getByTestId("total-count");
      expect(count.innerHTML).toBe("2");
    });

    it("adds new habit", () => {
      const input = screen.getByPlaceholderText("Habit");
      userEvent.type(input, "New habit");
      const btn = screen.getByText("Add");
      userEvent.click(btn);
      const addedName = screen.getAllByTestId("habit-name")[3];
      expect(addedName.innerHTML).toBe("New habit");
      const addedCount = screen.getAllByTestId("habit-count")[3];
      expect(addedCount.innerHTML).toBe("0");
    });

    it("deletes an item", () => {
      const Delete = screen.getAllByTitle("Delete")[2];
      userEvent.click(Delete);
      expect(presenter.getHabits().length).toBe(2);
    });

    it("increases the counter", () => {
      const increaseBtn = screen.getAllByTitle("increment")[0];
      const habitCount = screen.getAllByTestId("habit-count")[0];
      userEvent.click(increaseBtn);
      expect(habitCount.innerHTML).toBe("1");
    });

    it("decreases the counter", () => {
      const DecreaseBtn = screen.getAllByTitle("Decrement")[2];
      const habitCount = screen.getAllByTestId("habit-count")[2];
      userEvent.click(DecreaseBtn);
      expect(habitCount.innerHTML).toBe("0");
    });

    it("reset All Counter", () => {
      const totalCount = screen.getAllByTestId("total-count")[0];
      const resetBtn = screen.getByText("Reset All");
      userEvent.click(resetBtn);
      expect(totalCount.innerHTML).toBe("0");
    });
  });
});
