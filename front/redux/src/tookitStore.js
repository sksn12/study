import { createAction, createReducer } from "@reduxjs/toolkit";
import React from "react";
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

const TookitStore = () => {
  const addTodo = createAction("ADD");
  const deleteToDo = createAction("DELETE");
  console.log(addTodo.type); //ADD가 type에 들어감
  console.log(action.payload); //기존 액션에 있던 값을 payload를 통해 받아옴
  return <div></div>;
};

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    state.filter((toDo) => toDo.id !== action.payload);
  },
});
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
export default TookitStore;
