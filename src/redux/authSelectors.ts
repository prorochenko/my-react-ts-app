import { RootState } from './store';

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectShowModal = (state: RootState) => state.auth.showModal;
