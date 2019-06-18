import React from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions";

function CreateTodoForm(props) {
  const [message, setMessage] = React.useState("");

  function handleChange(event) {
    setMessage(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    props.createTodo(message);
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleChange} />
    </form>
  );
}

function mapDispatch(dispatch) {
  return {
    createTodo(message) {
      return dispatch(createTodo(message));
    }
  };
}

export default connect(
  null,
  mapDispatch
)(CreateTodoForm);
