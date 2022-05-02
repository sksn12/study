import React, { useReducer, useEffect } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return { ...state, loading: true };
    case "Success":
      return { loading: false, data: action.data, error: null };
    case "Error":
      return { loading: false, data: null, error: action.error };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const Users = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchUsers = async () => {
    try {
      dispatch({ type: "Loading" });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "Success", data: response.data });
    } catch (e) {
      dispatch({ type: "Error", error: e });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onClick = () => {
    fetchUsers();
  };

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={onClick}>Click!</button>
    </>
  );
};

export default Users;
