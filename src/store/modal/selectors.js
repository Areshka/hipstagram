
export const modalStateSelector = state => state.modal;
export const isOpenModalStateSelector = state => modalStateSelector(state).isOpen;