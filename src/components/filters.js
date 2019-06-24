/** @jsx jsx */
import { jsx } from "@emotion/core";
import { connect } from "react-redux";
import { changeFilter, changeSortBy } from "../actions";
import { Select, Spacer } from "./ui";

function Filters(props) {
  function handleFilterChange(event) {
    props.changeFilter(event.target.value);
  }

  function handleSortByChange(event) {
    props.changeSortBy(event.target.value);
  }

  return (
    <div
      css={{
        marginTop: "1rem",
        display: "flex",
        alignItems: "center",
        "@media (max-width: 512px)": {
          flexDirection: "column"
        }
      }}
    >
      <div>
        <h3 css={{ margin: ".5rem 0", marginRight: "1rem" }}>Filter:</h3>
        <Select
          aria-label="Select filter option"
          onChange={handleFilterChange}
          value={props.filter}
        >
          <option value="NONE">Unfiltered</option>
          <option value="ONLY_COMPLETED">Completed</option>
          <option value="ONLY_PENDING">Pending</option>
        </Select>
      </div>
      <Spacer />
      <div>
        <h3 css={{ margin: ".5rem 0", marginRight: "1rem" }}>Sort by:</h3>
        <Select
          aria-label="Select sort option"
          onChange={handleSortByChange}
          value={props.sortBy}
        >
          <option value="DUE_DATE_DESC">Due date desc</option>
          <option value="DUE_DATE_ASC">Due date asc</option>
        </Select>
      </div>
    </div>
  );
}

function mapState(state) {
  return {
    filter: state.filter,
    sortBy: state.sortBy
  };
}

function mapDispatch(dispatch) {
  return {
    changeFilter(filter) {
      return dispatch(changeFilter(filter));
    },
    changeSortBy(sortBy) {
      return dispatch(changeSortBy(sortBy));
    }
  };
}

export default connect(
  mapState,
  mapDispatch
)(Filters);
