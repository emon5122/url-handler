import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Download, Shield, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Google Drive Direct Download Link Generator — Free Tool",
    description:
        "Generate direct download links from Google Drive, Dropbox, and Mega sharing URLs instantly. Free tool — no sign-up, no ads. Just paste your link and get a direct download URL.",
    keywords: [
        "google drive direct download link",
        "google drive direct download link generator",
        "google drive download link",
        "direct download link generator",
        "dropbox direct download link",
        "mega direct download link",
        "GDrive direct download",
        "convert google drive link to direct download",
        "google drive file download link",
        "dropbox download link generator",
        "mega nz direct download",
    ],
    alternates: { canonical: "/features/direct-downloads" },
    openGraph: {
        title: "Google Drive Direct Download Link Generator — Free Tool",
        description:
            "Convert Google Drive, Dropbox & Mega sharing links to direct download URLs. Paste, convert, share.",
    },
};

const supportedPlatforms = [
    {
        name: "Google Drive",
        description:
            "Paste any Google Drive sharing link and get a direct download URL that bypasses the preview page.",
        example: "drive.google.com/file/d/FILE_ID/view",
    },
    {
        name: "Dropbox",
        description:
            "Convert Dropbox sharing links to direct download URLs by automatically adjusting the dl parameter.",
        example: "dropbox.com/s/HASH/filename.zip",
    },
    {
        name: "Mega",
        description:
            "Generate direct download links from Mega.nz sharing URLs for easier file distribution.",
        example: "mega.nz/file/HASH#KEY",
    },
];

const steps = [
    {
        step: "1",
        title: "Get your sharing link",
        desc: 'Right-click your file in Google Drive, Dropbox, or Mega and select "Get link" or "Share".',
    },
    {
        step: "2",
        title: "Paste it into Sniprl",
        desc: "Drop the sharing URL into the Sniprl shortener on our homepage.",
    },
    {
        step: "3",
        title: "Get a direct download link",
        desc: "Sniprl detects cloud storage links and automatically converts them to direct download URLs while also shortening them.",
    },
];

export default function DirectDownloadsPage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Hero */}
            <div className="text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                    <Download className="h-3.5 w-3.5" />
                    Free Tool — No Sign-Up Required
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Google Drive Direct Download{" "}
                    <span className="gradient-text">Link Generator</span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Convert Google Drive, Dropbox, and Mega sharing links into direct download URLs.
                    No more &ldquo;Download anyway?&rdquo; popups. Just a clean, instant download.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-xl px-10 font-semibold shadow-md">
                    <Link href="/" className="flex items-center gap-2">
                        Generate Download Link <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>

            {/* How it works */}
            <section className="mt-20">
                <h2 className="text-center text-3xl font-bold tracking-tight">
                    How It Works
                </h2>
                <div className="mt-12 grid gap-8 sm:grid-cols-3">
                    {steps.map(({ step, title, desc }) => (
                        <div key={step} className="text-center">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-lg">
                                {step}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Supported platforms */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    Supported Platforms
                </h2>
                <p className="mt-3 text-muted-foreground">
                    Sniprl automatically detects and converts links from these cloud storage providers:
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                    {supportedPlatforms.map(({ name, description, example }) => (
                        <div
                            key={name}
                            className="rounded-2xl border border-border/50 bg-card p-6"
                        >
                            <h3 className="text-lg font-semibold">{name}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                            <code className="mt-3 block rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
                                {example}
                            </code>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    Why Use Sniprl for Direct Downloads?
                </h2>
                <div className="mt-8 space-y-4">
                    {[
                        "No sign-up or account required — paste and go",
                        "Automatically shortens the URL while converting to direct download",
                        "Track how many times your download link is clicked",
                        "Works with Google Drive, Dropbox, and Mega",
                        "Links are served over HTTPS — secure and fast",
                        "Completely free with no ads on your download links",
                    ].map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                            <p className="text-muted-foreground">{benefit}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEO content block */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    What Is a Direct Download Link?
                </h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        A <strong className="text-foreground">direct download link</strong> is a URL that immediately starts
                        downloading a file when clicked, without showing a preview page or requiring the user
                        to click &ldquo;Download&rdquo; again.
                    </p>
                    <p>
                        Services like Google Drive, Dropbox, and Mega typically show a preview or confirmation
                        page before allowing downloads. This is inconvenient when you want to share files that
                        should download instantly — such as software installers, educational resources, or media files.
                    </p>
                    <p>
                        Sniprl solves this by <strong className="text-foreground">automatically converting sharing links</strong> from
                        these platforms into direct download URLs. When someone clicks your Sniprl short link,
                        the file downloads immediately — no extra clicks, no popups, no friction.
                    </p>
                </div>
            </section>

            {/* Why it matters for SEO-targeted queries */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    Google Drive Direct Download Link — Step by Step
                </h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        To create a Google Drive direct download link manually, you need to extract the file ID
                        from the sharing URL and construct a new URL in the
                        format: <code className="rounded bg-muted px-1.5 py-0.5 text-xs">https://drive.google.com/uc?export=download&amp;id=FILE_ID</code>
                    </p>
                    <p>
                        With Sniprl, you don&rsquo;t need to do any of that. Just paste the original Google Drive
                        sharing link, and we handle the conversion automatically while also giving you a clean,
                        short URL to share.
                    </p>
                </div>
            </section>

            {/* Trust signals */}
            <section className="mt-20 rounded-2xl border border-border/50 bg-muted/30 p-8 text-center">
                <div className="flex justify-center gap-8 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Instant conversion</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">HTTPS secured</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Download className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">No ads on links</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="mt-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight">
                    Ready to create a direct download link?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                    Paste your Google Drive, Dropbox, or Mega link and get a direct download URL in seconds.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-xl px-10 font-semibold shadow-md">
                    <Link href="/" className="flex items-center gap-2">
                        Get Started Free <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </section>
        </div>
    );
}
