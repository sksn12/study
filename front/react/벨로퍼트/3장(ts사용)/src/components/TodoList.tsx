import styled from "styled-components";
import TodoItem from "../components/TodoItem";
import { useTodoState } from "./TodoContext";

const TodoList = () => {
  const State = useTodoState();
  return (
    <TodoListBlock>
      {State.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            text={todo.text}
            done={todo.done}
            key={todo.id}
          />
        );
      })}
    </TodoListBlock>
  );
};

export default TodoList;

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
