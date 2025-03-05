import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ChatApiSlice = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    prompt: builder.mutation({
      query: (prompt) => {
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

    userId: builder.mutation({
      
      
      query: (id) => {
        console.log(id);
        return {
          url: `api/streak/?id=${id}`,
          method:"POST",
          headers: {
            "content-Type": "application/json",
          },
        }
      }
    })
  }),
});

export const { usePromptMutation,useUserIdMutation } = ChatApiSlice;
