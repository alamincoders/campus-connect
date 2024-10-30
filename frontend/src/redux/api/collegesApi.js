// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const collegesApi = createApi({
  reducerPath: "collegesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_BASE_URI}`,
  }),
  endpoints: (builder) => ({
    getAllColleges: builder.query({
      query: () => "/colleges",
    }),
    getSingleCollege: builder.query({
      query: (id) => `/colleges/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCollegesQuery, useGetSingleCollegeQuery } = collegesApi;
