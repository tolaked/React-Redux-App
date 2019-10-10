import * as types from "./actionTypes";
import axios from "axios";
import Todo from "../components/Todo";

export function list(todo) {
  return {
    type: types.LISTDATA,
    payload: todo
  };
}

export const getTodos = todo => dispatch => {
  axios.get("https://todos-restful-api.herokuapp.com/api/todos").then(res => {
    todo = res.data[0];
    debugger;
    dispatch({
      type: types.LISTDATA,
      payload: todo
    });
  });
};
