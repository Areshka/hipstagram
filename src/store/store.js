import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import authReducer from './auth/reducer';
import { initThunk } from './auth/thunks';
import modalReducer from './modal/reducer';

const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => store.getState())

store.dispatch(initThunk())

export default store;