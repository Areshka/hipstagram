import ActionTypes from './actionTypes';

const initialState = {
  isOpen: false,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        isOpen: true
      }

    case ActionTypes.HIDE_MODAL:
      return initialState

    default:
      return state;
  }
}

export default modalReducer;