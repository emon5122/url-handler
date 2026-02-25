import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you are looking for does not exist. Return to Sniprl to shorten your URLs.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-7xl font-extrabold tracking-tight text-primary">
                404
            </h1>
            <h2 className="mt-4 text-2xl font-bold tracking-tight">
                Page not found
            </h2>
            <p className="mt-2 max-w-md text-muted-foreground">
                The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
            </p>
            <Button asChild className="mt-8 rounded-xl px-8 font-semibold">
                <Link href="/">Go back home</Link>
            </Button>
        </div>
    );
}
