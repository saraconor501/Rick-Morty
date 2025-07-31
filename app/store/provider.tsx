import {configureStore} from "@reduxjs/toolkit";
import baseSlice from '../../features/uset/usrSlice'
export const store = configureStore({
    reducer: {
        base: baseSlice,
    },
})

