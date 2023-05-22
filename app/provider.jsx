"use client";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from "react";

const Provider = ({ children }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </SessionProvider>
    );
};
export default Provider;
