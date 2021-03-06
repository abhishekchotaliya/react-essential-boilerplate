import React, { useCallback, useContext } from 'react';
import { creditAction } from 'logic/actions/creditActions';
import { normalAction } from 'logic/actions/normalActions';
import { fetchPosts } from 'logic/actions/postActions';
import './App.scss';
import { Store } from 'logic/store';
import texts, { fillString, toCapitalize, toUpperCase } from 'utils/texts';
import constants from 'utils/constants';
import csvImg from 'assets/file-csv.png';

const App = () => {
  const { state, dispatch } = useContext(Store);
  console.log('state');
  console.log(state);
  const { normalCount, creditCount, posts } = state;

  const performAction = useCallback((type) => dispatch(creditAction(type)), [normalCount]);

  const getPosts = useCallback(() => dispatch(fetchPosts()), []);

  // const [query, setQuery] = useState('');

  return (
    <div className="App">
      <img alt="img" src={csvImg} />
      <h1>{constants.name}</h1>
      <h1>
        {toUpperCase(texts.ROOT_PAGE.CREDIT)}:{creditCount}
      </h1>
      <button type="button" onClick={() => performAction('sub')}>
        -
      </button>
      <button type="button" onClick={() => performAction('add')}>
        +
      </button>
      <hr />
      <h1>
        {toCapitalize(texts.ROOT_PAGE.COUNTER)}:{normalCount}
      </h1>
      <button type="button" onClick={() => dispatch(normalAction('sub'))}>
        -
      </button>
      <button type="button" onClick={() => dispatch(normalAction('add'))}>
        +
      </button>
      <hr />
      {fillString(texts.ROOT_PAGE.DYNAMIC, { english: 'Eng', age: 2 })}
      <hr />

      <button type="button" onClick={() => getPosts()}>
        Call API
      </button>

      <hr />

      {posts && posts.length > 0 ? posts.map((hit) => <p>{hit.title}</p>) : <></>}
    </div>
  );
};

export default App;
