import * as types from "./actionCreator";

const initialState = {};
export function list(state = initialState, action) {
  switch (action.type) {
    case types.LISTDATA: {
      return { ...state };
    }
    default:
  }
}
