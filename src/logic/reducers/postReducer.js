import TYPES from '../types';

// eslint-disable-next-line consistent-return
const postReducer = (state, action) => {
  // console.log('**');
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case TYPES.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
