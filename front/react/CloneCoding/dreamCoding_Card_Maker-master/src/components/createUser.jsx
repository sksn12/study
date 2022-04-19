import React, { useContext } from "react";
import { UserDispatch } from "../app";

const CreateUser = React.memo(function CreateUser({ onChange }) {
  const context = useContext(UserDispatch);
  const { idRef, reset, username, email, dispatch } = context;

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button
        onClick={() => {
          if (username && email) {
            dispatch({
              type: "onCreate",
              user: {
                id: idRef.current,
                username,
                email,
                active: false,
              },
            });
            idRef.current += 1;
            reset();
          }
        }}
      >
        등록
      </button>
    </div>
  );
});

export default CreateUser;

// 리액트에서 불변성을 지켜야하는 이유가
// 리액트는 얉은 비교를 통해 state나 props의 값이 변경되었는지 확인 하기 때문에 불변성을 어기면 참조값을 갖는 배열이나 객체의 값이
// 변경이되어도 리액트는 업데이트를 하지않는다
// 라고 알고 있는데
