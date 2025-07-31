import {configureStore} from "@reduxjs/toolkit";
import baseSlice from '../../features/uset/usrSlice'
import { fetchCharacters } from "@/features/fetchCharacters/fetchCharactersSlice";
export const store = configureStore({
    reducer: {
        base: baseSlice,
        [fetchCharacters.reducerPath]: fetchCharacters.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            fetchCharacters.middleware
        )
})

