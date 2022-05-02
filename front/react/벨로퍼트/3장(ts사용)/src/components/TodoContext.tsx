import { Dispatch, useRef, useContext, createContext, useReducer } from "react";

export interface initialTodosType {
  key?: number;
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: "CREATE"; todo: initialTodosType }
  | { type: "REMOVE"; id: number }
  | { type: "TOGLE"; id: number; done: boolean };

const initialTodos: initialTodosType[] = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현하기",
    done: false,
  },
];

// action 타입 재정의 필요
function todoReducer(state: initialTodosType[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "REMOVE":
      return state.filter((e) => e.id !== action.id);
    case "TOGLE":
      return state.map((e) =>
        e.id === action.id ? { ...e, done: !e.done } : e
      );
    default:
      throw new Error("Unhandled action type");
  }
}

type SampleDispatch = Dispatch<Action>;

const TodoStateContext = createContext<initialTodosType[] | null>(null);
const TodoDispatchContext = createContext<SampleDispatch | null>(null);
const TodoNextIdContext = createContext<React.MutableRefObject<number> | null>(
  null
);

const TodoContext = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoContext;

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error("Cannot find TodoProvider");
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) throw new Error("Cannot find TodoProvider");
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) throw new Error("Cannot find TodoProvider");
  return context;
}
