
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userToken: null,
    email: null
}

export const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        login: (state, action) => {
            let oldState = { ...state }
            oldState.userToken = action.userToken
            return oldState
        },
        logout: (state, action) => {
            return {
                userToken: null,
                email: null
            }
        }


    },
})

export default userSlice;

