import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message) && toast.error('Something went wrong :( Try to reload your page.');
    }
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, number });
            toast.success('A new contact was successfully added!')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message) && toast.error('You failed to add new contact :(');
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            toast.success('Your contact was successfully deleted!')
            return response.data;
        } catch (e) {
            toast.error('You failed to delete your contact :(');
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const patchContact = createAsyncThunk(
    "contacts/patchContact",
    async ({ id, name, number }, thunkAPI) => {
        try {
            const response = await axios.patch(`/contacts/${id}`, { name, number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);