import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, patchContact } from "./operations";
import { logOut } from "../auth/operations";

const contactsInitialState = {
    items: [],
    loading: false,
    error: null
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(
                    contact => contact.id !== action.payload.id
                );
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(patchContact.pending, handlePending)
            .addCase(patchContact.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    contact => contact.id === action.payload.id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(patchContact.rejected, handleRejected)
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
            });
    },
});


export const contactsReducer = contactsSlice.reducer;