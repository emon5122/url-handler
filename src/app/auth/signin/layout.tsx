import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In",
    description:
        "Sign in to Sniprl with Google or GitHub to manage your shortened links, view click analytics, and access your personal dashboard.",
    robots: { index: false, follow: true },
};

export default function SignInLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
