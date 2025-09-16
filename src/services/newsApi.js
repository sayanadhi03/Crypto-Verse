import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "x-rapidapi-key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
  "x-rapidapi-host": process.env.NEXT_PUBLIC_NEWS_API_HOST,
};

const createRequest = (url) => ({ url, headers: newsApiHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://news-api14.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ category = "cryptocurrency", count = 20 }) =>
        createRequest(
          `/v2/search/articles?query=${encodeURIComponent(
            category + " news"
          )}&language=en&limit=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = newsApi;
