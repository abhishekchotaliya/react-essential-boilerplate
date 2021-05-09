import React from 'react';
import PropTypes from 'prop-types';
import { appReducer, initialState } from './reducer';

// new context
export const Store = React.createContext();
// context name
Store.displayName = 'COUNTER';

// main wrapper component for all the providers
const StoreProvider = ({ children }) => {
  const [globalState, normalDispatch] = React.useReducer(appReducer, initialState);

  const dispatch = (action) => {
    if (typeof action === 'function') {
      action({ dispatch: normalDispatch, state: globalState });
    } else {
      normalDispatch(action);
    }
  };
  return (
    <Store.Provider
      value={{ state: globalState, dispatch }}
    >
      {children}
    </Store.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element,
};

export default StoreProvider;
