import { createSlice } from "@reduxjs/toolkit"
const users = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        adduser(state, action) { },
        removeuser(state, action) { },
        clearalluser(state, action) { }
    }
})