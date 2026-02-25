import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard — Manage Your Links",
    description:
        "View, manage, and track all your shortened URLs from your Sniprl dashboard. See click analytics, delete links, and organize everything in one place.",
    robots: { index: false, follow: false },
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
