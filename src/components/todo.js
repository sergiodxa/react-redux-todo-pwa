import React from "react";
import { connect } from "react-redux";
import { markAsCompleted } from "../actions";

function Todo(props) {
  function handleClick() {
    props.markAsCompleted();
  }

  return (
    <>
      <h3>{props.message}</h3>
      <time>{new Date(props.dueDate).toLocaleString()}</time>
      {!props.completed && <button onClick={handleClick}>Complete</button>}
    </>
  );
}

function mapDispatch(dispatch, { id }) {
  return {
    markAsCompleted() {
      return dispatch(markAsCompleted(id));
    }
  };
}

export default connect(
  null,
  mapDispatch
)(Todo);
