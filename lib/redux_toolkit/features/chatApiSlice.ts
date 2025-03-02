import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ChatApiSlice = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    prompt: builder.mutation({
      query: (prompt) => {
        console.log(prompt);
        
        return {
          url: "api/chat/",
          method:"POST",
          body: { prompt },
          headers: {
            "content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { usePromptMutation } = ChatApiSlice;
