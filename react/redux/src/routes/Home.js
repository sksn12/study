import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>TO DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text} />
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

// mapStateToProps 함수를 connect를 통해 연결하면 redux에 있는 state를 현재 컴포넌트에 props로 넘길수 있음
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

//mapDispatchToProps 함수를 connect를 통해 연결하면 현재 컴포넌트 props에 원하는 함수를 전달 할 수 잇음
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
