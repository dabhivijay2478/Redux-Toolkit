import { configureStore } from "@reduxjs/toolkit"
import  usersslice from "./Userslice"

const store = configureStore({
    reducer: {
        users: usersslice,
    }
})

export default store