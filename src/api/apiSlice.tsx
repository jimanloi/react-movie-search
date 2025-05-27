import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_API_KEY;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (query) =>
        query
          ? `/search/movie?api_key=${apiKey}&query=${query}`
          : `/movie/top_rated?api_key=${apiKey}`,
    }),
  }),
});

export const { useSearchMoviesQuery } = apiSlice;
