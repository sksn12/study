import React, { useContext } from "react";
import { UserDispatch } from "../app";

const User = React.memo(function User({ user }) {
  const context = useContext(UserDispatch);
  const { dispatch } = context;
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          dispatch({ type: "onToggle", id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({ type: "onRemove", id: user.id });
        }}
      >
        삭제
      </button>
    </div>
  );
});

const UserList = React.memo(function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
});

export default UserList;
