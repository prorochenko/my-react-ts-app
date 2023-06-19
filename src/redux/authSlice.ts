import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  user: {
    username: null,
    email: null,
    id: null,
    userData: { notAllowedProducts: [] },
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  sid: '',
  refreshToken: '',
  isRegister: false,
  paramsRegisterUser: null,

  showModal: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setStatusUser(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setStatusUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
