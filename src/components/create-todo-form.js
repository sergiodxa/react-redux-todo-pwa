import React from "react";
import { connect } from "react-redux";
import { createTodo } from "../actions";
import { Card, Input, Button } from "./ui";

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
    <Card styles={{ margin: "1rem 0"}}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="create-todo">What do you want to do next?</label>
        <br />
        <br />
        <Input
          placeholder="Learn how to build a PWA"
          id="create-todo"
          type="text"
          value={message}
          onChange={handleChange}
        />
        <br />
        <Button>Create todo</Button>
      </form>
    </Card>
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
