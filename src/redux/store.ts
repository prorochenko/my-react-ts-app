import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    filter: filtersReducer,
    contacts: contactsReducer,
    auth: authReducer,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});

export type RootState = ReturnType<typeof store.getState>;
