import { combineReducers, createStore } from 'redux';
import modalReducer from './modal/reducer';

const rootReducer = combineReducers({  
  modal: modalReducer
})

const store = createStore(rootReducer);

store.subscribe(() => store.getState())

export default store;