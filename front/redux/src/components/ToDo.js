import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ todo, onBtnDelete }) => {
  return (
    <li>
      <Link to={`/${todo.id}`}>
        {todo.text} <button onClick={onBtnDelete}>DEL</button>
      </Link>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    onBtnDelete: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}
export default connect(null, mapDispatchToProps)(ToDo);
