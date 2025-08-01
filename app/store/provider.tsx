import {configureStore} from "@reduxjs/toolkit";
import baseSlice from '../../features/uset/usrSlice'
import {fetchCharacters} from "@/features/fetchCharacters/fetchCharactersSlice";
import {fetchLocations} from "@/features/fetch-locations/FetchLocationsSlice";

export const store = configureStore({
    reducer: {
        base: baseSlice,
        [fetchCharacters.reducerPath]: fetchCharacters.reducer,
        [fetchLocations.reducerPath]: fetchLocations.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            fetchCharacters.middleware,
            fetchLocations.middleware
        ),
});

