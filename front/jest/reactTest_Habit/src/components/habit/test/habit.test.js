import React from "react";
import Habit from "../habit";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("habit test", () => {
  let habit = { name: "young", count: 1 };
  let onIncrement;
  let onDecrement;
  let onDelete;
  let HabitComponent;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    HabitComponent = (
      <Habit
        habit={habit}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        onDelete={onDelete}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(HabitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Btn Click", () => {
    beforeEach(() => {
      render(HabitComponent);
    });
    it("onIncrement", () => {
      const IncrementBtn = screen.getByTitle("increment");
      userEvent.click(IncrementBtn);
      expect(onIncrement).toHaveBeenCalledWith(habit);
    });
    it("onDecrement", () => {
      const DecrementBtn = screen.getByTitle("Decrement");
      userEvent.click(DecrementBtn);
      expect(onDecrement).toHaveBeenCalledWith(habit);
    });
    it("onDelete", () => {
      const onDeletetBtn = screen.getByTitle("Delete");
      userEvent.click(onDeletetBtn);
      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
