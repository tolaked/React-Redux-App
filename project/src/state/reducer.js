import * as types from "./actionTypes";

const initialState = {
  allTodo: []
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LISTDATA:
      return { ...state, allTodo: [...action.payload] };

    default:
      return state;
  }
}
