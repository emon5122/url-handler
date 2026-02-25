"use client";

import Logo from "@/components/logo";
import { motion } from "framer-motion";
import { ArrowLeft, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function SignOutPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = async () => {
        setIsLoading(true);
        await signOut({ callbackUrl: "/" });
    };

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
                            Sign out
                        </h1>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Are you sure you want to sign out of your account?
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col gap-3">
                        <button
                            onClick={handleSignOut}
                            disabled={isLoading}
                            className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            ) : (
                                <LogOut className="h-5 w-5" />
                            )}
                            {isLoading ? "Signing out…" : "Yes, sign me out"}
                        </button>

                        <Link
                            href="/dashboard"
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Go back to dashboard
                        </Link>
                    </div>

                    <p className="mt-6 text-center text-xs text-muted-foreground">
                        You can always sign back in anytime.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
