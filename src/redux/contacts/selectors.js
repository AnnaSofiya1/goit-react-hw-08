import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], (contacts, filter) => {
        return contacts.filter(contact =>
            (typeof contact.name === 'string' &&
                contact.name.toLowerCase().includes(filter.toLowerCase())) ||
            (typeof contact.number === "string" &&
                contact.number.includes(filter))
        );
    }
);