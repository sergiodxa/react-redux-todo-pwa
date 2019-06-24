/** @jsx jsx */
import { jsx } from "@emotion/core";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Global } from "@emotion/core";

import store from "./store";

import CreateTodoForm from "./components/create-todo-form";
import TodoList from "./components/todo-list";
import Filters from "./components/filters";

import { register } from "./service-worker";

function App() {
  return (
    <main
      css={{
        maxWidth: "720px",
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "0 1rem"
      }}
    >
      <Global
        styles={{
          body: {
            background: "#fafafa",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            margin: 0
          }
        }}
      />
      <CreateTodoForm />
      <Filters />
      <TodoList />
    </main>
  );
}

const $root = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
);

register();
