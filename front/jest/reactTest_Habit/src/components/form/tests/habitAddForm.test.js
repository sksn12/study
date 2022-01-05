import React from "react"; // react가져와야 테스트 성공
import HabitAddForm from "../habitAddForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("test", () => {
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
  // given : input값이 랜더링으로 주어지면
  // when : 사용자가 인풋에 값을 입력할때
  // then : 값이 제대로 들어가는지 또 만약 입력값이 빈어잇을때는 출려되지않는지
});
