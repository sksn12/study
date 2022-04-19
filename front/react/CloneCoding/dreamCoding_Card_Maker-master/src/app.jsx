import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import UserList from "./components/userList";
import CreateUser from "./components/createUser";
import useInputs from "./customHook/useInput";

function countUsersActive(users) {
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: { username: "", email: "" },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: true,
    },
  ],
};

// state와 action순서 바뀌면 안댐!!!!
function reducer(state, action) {
  switch (action.type) {
    case "onRemove":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    case "onCreate":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "onToggle":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    default:
      return state;
  }
}

// contextApi 생성
export const UserDispatch = React.createContext(null);

const App = React.memo(function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const idRef = useRef(4);
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const usersActiveTotal = countUsersActive(users);

  // contextAPI생성후 Provider라는 컴포넌트로 context의 값을 정함
  return (
    <UserDispatch.Provider value={{ dispatch, idRef, reset, email, username }}>
      <CreateUser onChange={onChange} />
      <UserList users={users} />
      {usersActiveTotal}
    </UserDispatch.Provider>
  );
});

export default App;
