import React from "react"; // react가져와야 테스트 성공
import HabitAddForm from "../habitAddForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("test", () => {
  it("renders", () => {
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  describe("Form Submit", () => {
    let onAdd;
    let input;
    let button;
    beforeEach(() => {
      onAdd = jest.fn();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText("Habit");
      button = screen.getByText("Add");
    });
    it("input test", () => {
      //사용자가 input에 타입에 New Habit이라는 문장을 넣고
      userEvent.type(input, "New Habit");
      // 버튼을 클릭함
      userEvent.click(button);
      // onAdd mock함수는  New Habit과 함께 호출됨
      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });
    it("When input text is noting called zero", () => {
      userEvent.type(input, "");
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
