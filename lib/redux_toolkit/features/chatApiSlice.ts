
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const ChatApiSlice = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    prompt: builder.mutation({
      query: (prompt) => {
        return {
          url: "api/chat/",
          method: "POST",
          body: { prompt },
          headers: {
            "content-Type": "application/json",
          },
        };
      },
    }),

    userId: builder.mutation({
      query: (id) => {
        return {
          url: `api/streak/?id=${id}`,
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
        };
      },
    }),
    newWord: builder.mutation({
      query: (id) => {
        return {
          url: `api/new_word/?id=${id}`,
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
        };
      },
    }),

    Objects: builder.mutation({
      query: (id) => {
        return {
          url: `api/objects-names/?id=${id}`,
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
        };
      },
    }),

    grammar: builder.mutation({
     
      query: ({ language, id }: { language: string; id: string }) => {
        return {
          url: `api/grammar/?language=${language}&id=${id}`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", 
        };
      },
    }),
  }),
});

export const { usePromptMutation, useUserIdMutation,useGrammarMutation,useNewWordMutation,useObjectsMutation } = ChatApiSlice;
