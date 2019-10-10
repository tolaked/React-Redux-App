import * as types from "./actionTypes";
import axios from "axios";

export function list(todo) {
  return {
    type: types.LISTDATA,
    payload: todo
  };
}

export const getTodos = () => dispatch => {
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://todos-restful-api.herokuapp.com/api/todos"
    )
    .then(res => {
      const todo = res.data;
      dispatch(list(todo));
    })
    .catch(err => console.log(err.message));
};
