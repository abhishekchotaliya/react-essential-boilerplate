import TYPES from '../types';

const creditReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CREDIT_COUNT:
      if (action.payload === 'add') {
        return {
          ...state,
          creditCount: state.creditCount + 1,
        };
      }
      return {
        ...state,
        creditCount: state.creditCount - 1,
      };
    default:
      return state;
  }
};

export default creditReducer;
