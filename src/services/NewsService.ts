import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IHeadlinesQuery } from "../models/IHeadlinesQuery";
import { INewsResponse } from "../models/INewsResponse";
import { ISearchQuery } from "../models/ISearchQuery";
import { API_KEY } from "../queryParameters/ApiKey";

export const NewsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
    prepareHeaders: (headers) => {
      headers.set("authorization", API_KEY);
    },
  }),
  endpoints: (build) => ({
    fetchNewsHeadlines: build.query<INewsResponse, IHeadlinesQuery>({
      query: (headlinesQuery) => ({
        url: "/top-headlines",
        params: headlinesQuery,
      }),
    }),
    fetchByKeywords: build.query<INewsResponse, ISearchQuery>({
      query: (keywordsQuery) => ({
        url: "/everything",
        params: keywordsQuery,
      }),
    }),
  }),
});
