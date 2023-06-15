import { createSlice } from "@reduxjs/toolkit"
const usersslice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        adduser(state, action) {
            state.push(action.payload)
        },
        removeuser(state, action) {
            state.splice(action.payload, 1)
        },
        clearalluser(state, action) {
            return state = []
        }
    }
})
export default usersslice.reducer
export const { adduser, removeuser, clearalluser } = usersslice.actions