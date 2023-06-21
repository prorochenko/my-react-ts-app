import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

interface AuthState {
  user: {
    username: null | string;
    email: null | string;
    id: null | string;
  };
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  sid: string;
  refreshToken: string;
  isRegister: boolean;
  paramsRegisterUser: null | any;
  isLoading: boolean;
  showModal: boolean;
  error: string | null;
  items: string;
}

const authInitialState: AuthState = {
  user: {
    username: null,
    email: null,
    id: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  sid: '',
  refreshToken: '',
  isRegister: false,
  paramsRegisterUser: null,
  isLoading: false,
  showModal: false,
  error: null,
  items: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setStatusUser(state, action) {
      state.isLoggedIn = action.payload;
    },
    setStatusModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string | null;
      });
  },
});

export const { setStatusUser, setStatusModal } = authSlice.actions;
export const authReducer = authSlice.reducer;
