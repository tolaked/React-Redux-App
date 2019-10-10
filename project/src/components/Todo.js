import React, { useEffect } from "react";
import { getTodos } from "../state/actionCreator";
import { connect } from "react-redux";
import Styled from "styled-components";

const Todo = props => {
  useEffect(() => {
    props.getTodos();
  }, []);
  const myTodos = [...props.state.allTodo];

  return (
    <StyledTodo className="allTodo">
      {myTodos.map(
        (el, id) =>
          el._id && (
            <StyledDiv key={id}>
              <h5>Name:{el.name}</h5>
              <p>id:{el._id}</p>
              <p>Created at:{el.created_at}</p>
            </StyledDiv>
          )
      )}
    </StyledTodo>
  );
};

export default connect(
  state => ({ state: state }),
  dispatch => ({ getTodos: () => dispatch(getTodos()) })
)(Todo);

const StyledTodo = Styled.div`
text-align:center;
display:flex;
flex-wrap:wrap;
margin:0 auto
margin-left:10px;

`;
const StyledDiv = Styled.div`
border:1px solid black;
margin-bottom:10px;
margin-right:10px;
width:300px;
background-color:
`;
