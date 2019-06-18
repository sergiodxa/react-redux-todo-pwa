const WEEK_IN_MILLISECONDS = 7 * 24 * 60 * 60 * 1000;

function reset() {
  return { type: "RESET" };
}

function markAsCompleted(id) {
  return { type: "MARK_AS_COMPLETED", payload: { id } };
}

function createTodo(message) {
  return async dispatch => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        message,
        dueDate: new Date(Date.now() + WEEK_IN_MILLISECONDS),
        completed: false
      }),
      headers: { "Content-type": "application/json" }
    });
    const payload = await response.json();
    return dispatch({ type: "CREATE_TODO", payload });
  };
}

function changeFilter(filter) {
  if (
    filter !== "NONE" &&
    filter !== "ONLY_COMPLETED" &&
    filter !== "ONLY_PENDING"
  ) {
    throw new Error(
      `The filter ${filter} is not a valid filter name. Use \`NONE\`, \`ONLY_COMPLETED\` or \`ONLY_PENDING\``
    );
  }
  return { type: "CHANGE_FILTER", payload: { filter } };
}

function changeSortBy(sortBy) {
  if (sortBy !== "DUE_DATE_ASC" && sortBy !== "DUE_DATE_DESC") {
    throw new Error(
      `Sorting by ${sortBy} is not a valid. Use \`DUE_DATE_ASC\` or \`DUE_DATE_DESC\``
    );
  }

  return { type: "CHANGE_SORT_BY", payload: { sortBy } };
}

export { reset, createTodo, markAsCompleted, changeFilter, changeSortBy };
