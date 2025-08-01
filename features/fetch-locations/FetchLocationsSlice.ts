import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface Locations {
    id:number;
    name:string;
    type: string;
    dimension: string;
    residents: string[];
}

export interface LocationsResponse {
    info: {
        count:string;
        pages:number;
        next: string | null;
        prev: string | null;
    };
    results: Locations[];
}
export interface LocationQueryParams {
    page?:number;
    name?:string;
}



export const fetchLocations = createApi({
    reducerPath: 'fetchLocation',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/',
    }),
    endpoints: (builder) => ({
        getLocations: builder.query<LocationsResponse, LocationQueryParams>({
            query: ({page = 1, name = '',}) => ({
                url:'location/',
                params: {name, page}
            })
        })
    })
})

export const { useGetLocationsQuery } = fetchLocations