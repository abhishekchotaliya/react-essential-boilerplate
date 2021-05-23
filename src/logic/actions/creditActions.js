import TYPES from '../types';

export const creditAction =
  (mode) =>
  async ({ dispatch }) => {
    await sleeper();
    dispatch({
      type: TYPES.CREDIT_COUNT,
      payload: mode,
    });
  };

const sleeper = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

export const creditAction2 =
  (mode) =>
  async ({ state, dispatch }) => {
    console.log('>', state);
    dispatch({
      type: TYPES.CREDIT_COUNT,
      payload: mode,
    });
  };
