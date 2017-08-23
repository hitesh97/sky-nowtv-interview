import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export function reducer(state, action = {}) {
  switch (action.type) {
    case "MEMBERS_LOADING_FULFILLED":
      return Object.assign({}, state, {
        members: action.payload
      });

    case "MESSAGES_LOADING_FULFILLED":
      return Object.assign({}, state, {
        messages: action.payload
      });

    default:
      return state;
  }
}

export const store = createStore(reducer, {}, applyMiddleware(
  promiseMiddleware()
));
