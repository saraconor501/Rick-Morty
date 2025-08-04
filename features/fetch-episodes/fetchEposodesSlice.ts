import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchEpisodes = createApi({
  reducerPath: 'fetchEpisodes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (builder) => ({
    getEpisodes: builder.query({
      query: ({ page = 1, name = '' }) => ({
        url: '/episode',
        params: { page, name }
      })
    }),
    getEpisodesById: builder.query({
      query: (id) => `/episode/${id}`
    })
  })
})

export const {useGetEpisodesQuery, useGetEpisodesByIdQuery} = fetchEpisodes
