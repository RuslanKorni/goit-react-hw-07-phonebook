import { createSelector } from "reselect";

export const selectContacts = state => state.contacts.items; 

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter; 

export const selectVisibleContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
      const normalizedFilter = filter.toLowerCase();
  
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  );