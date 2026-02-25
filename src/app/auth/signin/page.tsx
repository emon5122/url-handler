"use client";

import Logo from "@/components/logo";
import { motion } from "framer-motion";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const providerIcons: Record<string, React.ReactNode> = {
    google: (
        <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
        </svg>
    ),
    github: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
            />
        </svg>
    ),
};

const providerColors: Record<string, string> = {
    google: "bg-white hover:bg-gray-50 text-gray-800 border border-gray-300",
    github: "bg-gray-900 hover:bg-gray-800 text-white",
};

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
};

export default function SignInPage() {
    const [providers, setProviders] = useState<Record<string, Provider> | null>(null);

    useEffect(() => {
        getProviders().then((p) => setProviders(p));
    }, []);

    return (
        <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
            {/* Background gradient blobs */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-md"
            >
                <div className="rounded-2xl border border-border/60 bg-card/80 p-8 shadow-xl backdrop-blur-sm sm:p-10">
                    {/* Logo & heading */}
                    <div className="flex flex-col items-center text-center">
                        <Logo size="md" />
                        <h1 className="mt-5 text-2xl font-bold tracking-tight">
                            Welcome back
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Sign in to manage your links and view analytics.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="my-8 flex items-center gap-3">
                        <div className="h-px flex-1 bg-border/60" />
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Continue with
                        </span>
                        <div className="h-px flex-1 bg-border/60" />
                    </div>

                    {/* Provider buttons */}
                    <div className="space-y-3">
                        {providers ? (
                            Object.values(providers).map((provider) => (
                                <motion.button
                                    key={provider.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => signIn(provider.id, { callbackUrl: "/dashboard" })}
                                    className={`flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold shadow-sm transition-all ${providerColors[provider.id] ?? "bg-primary text-primary-foreground hover:brightness-110"}`}
                                >
                                    {providerIcons[provider.id] ?? null}
                                    Continue with {provider.name}
                                </motion.button>
                            ))
                        ) : (
                            /* Loading skeleton */
                            <>
                                {[1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="h-12 animate-pulse rounded-xl bg-muted"
                                    />
                                ))}
                            </>
                        )}
                    </div>

                    {/* Footer note */}
                    <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
                        By signing in, you agree to our{" "}
                        <a href="/terms" className="underline underline-offset-2 hover:text-foreground">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>

                {/* Bottom text */}
                <p className="mt-6 text-center text-xs text-muted-foreground">
                    No account needed for basic shortening — sign in for analytics &amp; link management.
                </p>
            </motion.div>
        </div>
    );
}
