import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://65a68ec274cf4207b4f05c04.mockapi.io/api/V2';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  //? Операція додавання контакту
  export const addContact  = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", contact);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  //? Операція видалення контакту
  export const deleteContact = createAsyncThunk(
    "tasks/deleteTask",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  