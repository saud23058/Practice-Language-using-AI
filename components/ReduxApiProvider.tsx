"use client"
import { ChatApiSlice } from "@/lib/redux_toolkit/features/chatApiSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import React from "react";

const ReduxApiProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ApiProvider api={ChatApiSlice}>{children}</ApiProvider>;
};

export default ReduxApiProvider;
