import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '0', text: 'John Travolta', tag: 'friend' },
  { id: '1', text: 'Leonardo Dicaprio', tag: 'family' },
];

interface Contact {
  id: string;
  text: string;
  tag: string;
}

type ContactsState = Contact[];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState as ContactsState,
  reducers: {
    addContacts: {
      reducer: (state, action: PayloadAction<Contact>) => {
        state.push(action.payload);
      },
      prepare: (text: string, tag: string) => {
        return {
          payload: {
            id: nanoid(),
            text,
            tag,
          },
        };
      },
    },
    deleteContacts: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
