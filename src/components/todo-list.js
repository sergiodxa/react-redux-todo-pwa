import React from "react";
import { connect } from "react-redux";
import Todo from "./todo";

function TodoList({ todos }) {
  return (
    <section>
      {todos.map(todo => (
        <article key={todo.dueDate.toString()}>
          <Todo {...todo} />
        </article>
      ))}
    </section>
  );
}

function mapState(state) {
  return {
    todos: Object.values(state.todos)
      .sort((a, b) => {
        if (state.sortBy === "DUE_DATE_DESC") {
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        }
        if (state.sortBy === "DUE_DATE_ASC") {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        }
        throw new Error(
          `Sorting by ${
            state.sortBy
          } is not a valid. Use \`DUE_DATE_ASC\` or \`DUE_DATE_DESC\``
        );
      })
      .filter(todo => {
        if (state.filter === "NONE") return true;
        if (state.filter === "ONLY_COMPLETED") return todo.completed;
        if (state.filter === "ONLY_PENDING") return !todo.completed;
        throw new Error(
          `The filter ${
            state.filter
          } is not a valid filter name. Use \`NONE\`, \`ONLY_COMPLETED\` or \`ONLY_PENDING\``
        );
      })
  };
}

export default connect(mapState)(TodoList);
