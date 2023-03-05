import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const AddContactData = createAsyncThunk("add/data", async (contactdata, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.post("http://localhost:5000/contact/add", contactdata)
        return data.result
    } catch (error) {
        console.log(error)
    }
}
)

export const GetAllContactData = createAsyncThunk("get/data", async (e, { rejectWithValue, getState }) => {
    try {
        const { data } = await axios.get("http://localhost:5000/contact")
        return data.result
    } catch (error) {
        console.log(error)
    }
}
)