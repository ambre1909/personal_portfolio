import { configureStore } from "@reduxjs/toolkit"
import contactSlice from "./contactSlice"

const store = configureStore({
    reducer: {
        allcontact: contactSlice
    }
})

export default store 