import ActionTypes from './actionTypes';

export const showModal = () => {
  return {
    type: ActionTypes.SHOW_MODAL,
  }
}

export const hideModal = () => {
  return {
    type: ActionTypes.HIDE_MODAL
  }
}