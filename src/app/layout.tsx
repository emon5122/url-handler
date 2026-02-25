import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/context/authProvider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";
import QueryProvider from "../context/queryProvider";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    title: {
        default: "Sniprl — Free URL Shortener | Shorten, Share & Track Links Instantly",
        template: "%s | Sniprl",
    },
    description:
        "Sniprl is the fastest free URL shortener. Shorten long links in one click, track clicks with real-time analytics, auto-convert Google Drive & Dropbox to direct downloads. No sign-up required.",
    keywords: [
        "url shortener",
        "link shortener",
        "shorten url",
        "short link",
        "tiny url",
        "link tracker",
        "click analytics",
        "free url shortener",
        "share links",
        "download link shortener",
        "shorten link free",
        "url shortener free",
        "best url shortener",
        "short url generator",
        "link management",
        "link shortener free",
        "url shortener no sign up",
        "google drive direct download link",
        "dropbox direct download link",
        "custom short url",
        "sniprl",
        "bitly alternative",
        "tinyurl alternative",
    ],
    authors: [{ name: "Nexis LTD", url: "https://nexisltd.com" }],
    creator: "Nexis LTD",
    publisher: "Nexis LTD",
    metadataBase: new URL("https://url.nexisltd.com"),
    alternates: { canonical: "/" },
    category: "technology",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://url.nexisltd.com",
        siteName: "Sniprl",
        title: "Sniprl — Free URL Shortener | Shorten & Track Links",
        description:
            "Shorten long URLs in one click. Free URL shortener with click analytics, direct download links, and a full dashboard. No sign-up required.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sniprl — Free URL Shortener with Click Analytics",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sniprl — Free URL Shortener | Shorten & Track Links",
        description:
            "Shorten long URLs in one click. Free URL shortener with click analytics, direct download links, and a full dashboard.",
        images: [
            {
                url: "/og-image.png",
                alt: "Sniprl — Free URL Shortener with Click Analytics",
            },
        ],
        creator: "@nexisltd",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "48x48" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180" },
        ],
    },
    manifest: "/site.webmanifest",
    other: {
        "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION ?? "",
    },
};

/* ── JSON-LD Structured Data ──────────────────────────────── */
const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Sniprl",
    url: "https://url.nexisltd.com",
    description:
        "Free URL shortener with click analytics, direct download links, and a full management dashboard.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: {
        "@type": "Organization",
        name: "Nexis LTD",
        url: "https://nexisltd.com",
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "150",
        bestRating: "5",
    },
};

const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexis LTD",
    url: "https://nexisltd.com",
    logo: "https://url.nexisltd.com/logo.svg",
    sameAs: [
        "https://github.com/emon5122",
    ],
};

const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sniprl",
    url: "https://url.nexisltd.com",
    description: "Free URL shortener — shorten, share & track links instantly.",
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://url.nexisltd.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
    },
};

const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is Sniprl free to use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Sniprl is completely free. You can shorten unlimited URLs, track clicks, and manage your links without any cost or sign-up.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to create an account to shorten URLs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No account is required to shorten URLs. However, signing in with Google or GitHub gives you access to a personal dashboard where you can manage and track all your links.",
            },
        },
        {
            "@type": "Question",
            name: "Does Sniprl support direct download links?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Sniprl automatically converts Google Drive, Dropbox, and Mega sharing links into direct download links, making file sharing much easier.",
            },
        },
        {
            "@type": "Question",
            name: "Can I track how many clicks my short link gets?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, every shortened link comes with real-time click analytics. Sign in to your dashboard to view detailed click counts for all your links.",
            },
        },
        {
            "@type": "Question",
            name: "Is Sniprl a good alternative to Bitly or TinyURL?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. Sniprl offers instant URL shortening, click analytics, direct download link conversion, and a full management dashboard — all completely free with no ads on your links.",
            },
        },
    ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
                />
            </head>
            <body className={`${inter.variable} font-sans bg-background antialiased`}>
                <AuthProvider>
                    <QueryProvider>
                        <div className="flex min-h-screen flex-col">
                            <Header />
                            <main className="flex-1">{children}</main>
                            <Footer />
                        </div>
                        <Toaster />
                    </QueryProvider>
                </AuthProvider>
                <Analytics />
            </body>
        </html>
    );
};

export default RootLayout;
