import { createSlice } from "@reduxjs/toolkit";
import { AddContactData, GetAllContactData } from "./contactAction";


const contactSlice = createSlice({
    name: "contact data",
    initialState: { contactData: [] },
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(AddContactData.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(AddContactData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.contactdataAdded = true
            })
            .addCase(AddContactData.rejected, (state, { payload }) => {
                state.loading = false
                state.usererror = payload
            })
            .addCase(GetAllContactData.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(GetAllContactData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.contactData = payload
            })
            .addCase(GetAllContactData.rejected, (state, { payload }) => {
                state.loading = false
                state.usererror = payload
            })


    }
})

export default contactSlice.reducer
