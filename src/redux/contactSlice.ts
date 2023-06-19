import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  status: 'all',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
