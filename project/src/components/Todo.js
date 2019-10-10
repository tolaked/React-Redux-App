import React, { useEffect } from "react";
import { getTodos } from "../state/actionCreator";
import { connect } from "react-redux";

const Todo = props => {
  useEffect(() => {
    props.getTodos();
  }, []);
  console.log(props);

  return (
    <div>
      <h5>Hello</h5>
      <p>{props.state.id}</p>
      <p>{props.state.completed}</p>
      <p>{props.state.createdat}</p>
    </div>
  );
};

export default connect(
  state => ({ state: state }),
  dispatch => ({ getTodos: () => dispatch(getTodos()) })
)(Todo);
