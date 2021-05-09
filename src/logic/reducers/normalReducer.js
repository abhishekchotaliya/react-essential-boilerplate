import TYPES from '../types';

const counterReducer = (state, action) => {
  switch (action.type) {
    case TYPES.NORMAL_COUNT:
      if (action.payload === 'add') {
        return {
          ...state,
          normalCount: state.normalCount + 1,
        };
      }
      return {
        ...state,
        normalCount: state.normalCount - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
