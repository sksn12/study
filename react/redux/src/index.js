import { createStore } from "redux";

const input = document.getElementById("input");
const form = document.getElementById("form");
const ul = document.getElementById("ul");

const ADD_TODD = "ADD_TODD";
const DELETE_TODD = "DELETE_TODD";

// reducer사용할때 무언가 추가할때 push하지말기(mutate X) => 새로운 배열을 만들기
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODD:
      return state.filter((e) => e.id !== action.ID);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  paintStore();
  console.log(store.getState());
});

const paintStore = () => {
  const toDo = store.getState();
  ul.innerHTML = "";
  toDo.forEach((e) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DELETE";
    btn.addEventListener("click", onDELETE);
    li.id = e.id;
    li.innerText = e.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};

const storeAdd = (toDo) => {
  store.dispatch({ type: ADD_TODD, text: toDo });
};

const onAdd = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  storeAdd(toDo);
};

const storeDelete = (id) => {
  store.dispatch({ type: DELETE_TODD, ID: id });
};

const onDELETE = (e) => {
  const id = e.target.parentNode.id;
  storeDelete(parseInt(id));
};

form.addEventListener("submit", onAdd);
