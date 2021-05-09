import counterReducer from './reducers/normalReducer';
import creditReducer from './reducers/creditReducer';
import TYPES from './types';
import postReducer from './reducers/postReducer';

// initial application data
export const initialState = {
  normalCount: 1,
  creditCount: 1,
  posts: [],
};

// based on the type, delegate the job to respective reducer
export const appReducer = (state = initialState, action) => {
  const type = action && action.type ? action.type.split('/').shift() : '';
  let newState = state;
  if (type === TYPES.NORMAL) {
    newState = counterReducer(state, action);
  } else if (type === TYPES.CREDIT) {
    newState = creditReducer(state, action);
  } else if (type === TYPES.POSTS) {
    newState = postReducer(state, action);
  }
  return newState;
};
