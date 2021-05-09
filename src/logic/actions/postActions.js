import { getRequest } from 'utils/apiRequests';
import TYPES from '../types';

export const fetchPosts = () => async ({ dispatch }) => {
  const req = await getRequest('https://jsonplaceholder.typicode.com/posts') || [];
  console.log('req');
  console.log(req);
  dispatch({
    type: TYPES.CREDIT_COUNT,
    payload: 'add',
  });
  dispatch({
    type: TYPES.FETCH_POSTS,
    payload: req,
  });
};

export const creditAction2 = (mode) => async ({ dispatch }) => {
  dispatch({
    type: TYPES.CREDIT_COUNT,
    payload: mode,
  });
};
