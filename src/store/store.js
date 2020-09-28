import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { initThunk } from './users/thunks';
import modalReducer from './modal/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  users: usersReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => store.getState())

store.dispatch(initThunk())

export default store;