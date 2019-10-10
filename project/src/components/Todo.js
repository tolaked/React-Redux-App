import React, { useEffect } from "react";
import { getTodos } from "../state/actionCreator";
import { connect } from "react-redux";

const Todo = props => {
  useEffect(() => {
    props.getTodos();
  }, []);
  const myTodos = [...props.state.allTodo];

  return (
    <div>
      <h5>Hello</h5>
      {myTodos.map((el, id) => (
        <div key={id}>
          <h5>{el.name}</h5>
          <p>{el._id}</p>
          <p>{el.created_at}</p>
        </div>
      ))}
    </div>
  );
};

export default connect(
  state => ({ state: state }),
  dispatch => ({ getTodos: () => dispatch(getTodos()) })
)(Todo);
