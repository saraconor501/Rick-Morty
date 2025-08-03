import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
export interface Characters {
  id:number;
  name:string;
  status:string;
  image:string;
  species:string;
  gender:string;
  location: {
    name: string;
  }
  origin: {
    name: string;
  }
}

export interface CharactersResponse {
  info: {
    count:string;
    pages:number;
    next: string | null;
    prev: string | null;
  };
  results: Characters[];
}
export interface CharacterQuetyParams {
  page?:number;
  name?:string;
}



export const fetchCharacters = createApi({
  reducerPath: 'fetchCharacters',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (builder) => ({
    getCharacter: builder.query<CharactersResponse, CharacterQuetyParams>({
      query: ({page = 1, name = '',}) => ({
        url:'character/',
        params: {name, page}
      })
    }),
    getCharactersById: builder.query<Characters,number>({
      query: (id) => `character/${id}`
    })
  })
})

export const { useGetCharacterQuery, useGetCharactersByIdQuery } = fetchCharacters