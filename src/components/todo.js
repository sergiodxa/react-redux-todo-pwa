/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { markAsCompleted } from "../actions";
import { Card, Button } from "./ui";

function Todo(props) {
  function handleClick() {
    props.markAsCompleted();
  }

  return (
    <Card styles={{ margin: "1rem 0" }}>
      <h3 css={{ margin: "0 0 1rem" }}>{props.message}</h3>
      <time css={{ display: "block" }}>
        Due Date: {new Date(props.dueDate).toLocaleString("default", {
          month: "long",
          year: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </time>
      {!props.completed && (
        <React.Fragment>
          <br />
          <Button onClick={handleClick}>Complete</Button>
        </React.Fragment>
      )}
    </Card>
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
