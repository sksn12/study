import React from "react";
import Habits from "../habits";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("habits test", () => {
  //   it("renders", () => {
  //     let onReset = jest.fn();
  //     const habits = [{ id: 1 }, { id: 2 }];
  //     const component = renderer.create(
  //       <Habits onReset={onReset} habits={habits} />
  //     );
  //     expect(component.toJSON()).toMatchSnapshot();
  //   });
  describe("", () => {
    let onReset;
    let btn;
    const habits = [{ id: 1 }, { id: 2 }];
    beforeEach(() => {
      onReset = jest.fn();
      render(<Habits onReset={onReset} habits={habits} />);
      btn = screen.getByText("Reset All");
    });

    it("When onClick is clicked call btn ", () => {
      userEvent.click(btn);
      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });
});
