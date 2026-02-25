import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    BarChart3,
    Check,
    DollarSign,
    Download,
    Shield,
    UserX,
    X,
    Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Free URL Shorteners 2025 — Sniprl vs Bitly vs TinyURL",
    description:
        "Compare the best free URL shorteners of 2025. See how Sniprl stacks up against Bitly, TinyURL, and other link shorteners on features, pricing, analytics, and ease of use.",
    keywords: [
        "best url shortener",
        "best free url shortener",
        "best link shortener",
        "url shortener comparison",
        "bitly alternative",
        "tinyurl alternative",
        "free url shortener 2025",
        "sniprl vs bitly",
        "sniprl vs tinyurl",
        "link shortener free no sign up",
        "url shortener with analytics free",
    ],
    alternates: { canonical: "/compare" },
    openGraph: {
        title: "Best Free URL Shorteners 2025 — Full Comparison",
        description:
            "Compare Sniprl, Bitly, TinyURL, and more. Find the best free URL shortener for your needs.",
    },
};

const features = [
    { name: "Free to use", sniprl: true, bitly: "Limited", tinyurl: true },
    { name: "No sign-up required", sniprl: true, bitly: false, tinyurl: true },
    { name: "Click analytics", sniprl: true, bitly: "Paid", tinyurl: false },
    { name: "Custom dashboard", sniprl: true, bitly: "Paid", tinyurl: false },
    { name: "Direct download links", sniprl: true, bitly: false, tinyurl: false },
    { name: "No ads on links", sniprl: true, bitly: true, tinyurl: false },
    { name: "Open source", sniprl: true, bitly: false, tinyurl: false },
    { name: "API access", sniprl: true, bitly: "Paid", tinyurl: "Limited" },
    { name: "Custom branded links", sniprl: false, bitly: "Paid", tinyurl: false },
    { name: "QR code generation", sniprl: false, bitly: "Paid", tinyurl: true },
];

function CellValue({ value }: { value: boolean | string }) {
    if (value === true) return <Check className="mx-auto h-5 w-5 text-emerald-600" />;
    if (value === false) return <X className="mx-auto h-5 w-5 text-red-400" />;
    return <span className="text-sm text-amber-600 font-medium">{value}</span>;
}

export default function ComparePage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Hero */}
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Best Free URL Shorteners{" "}
                    <span className="gradient-text">2025</span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Looking for the best URL shortener? We compared the top link shortening services
                    so you can pick the right one — with an honest take on where Sniprl fits in.
                </p>
            </div>

            {/* Comparison Table */}
            <div className="mt-14 overflow-x-auto rounded-2xl border border-border/60 shadow-sm">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-border/60 bg-muted/40">
                            <th className="px-6 py-4 text-left font-semibold">Feature</th>
                            <th className="px-6 py-4 text-center font-semibold text-primary">Sniprl</th>
                            <th className="px-6 py-4 text-center font-semibold">Bitly</th>
                            <th className="px-6 py-4 text-center font-semibold">TinyURL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((f, i) => (
                            <tr
                                key={f.name}
                                className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                            >
                                <td className="px-6 py-3.5 font-medium">{f.name}</td>
                                <td className="px-6 py-3.5 text-center">
                                    <CellValue value={f.sniprl} />
                                </td>
                                <td className="px-6 py-3.5 text-center">
                                    <CellValue value={f.bitly} />
                                </td>
                                <td className="px-6 py-3.5 text-center">
                                    <CellValue value={f.tinyurl} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Why Sniprl */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    Why Choose Sniprl?
                </h2>
                <p className="mt-3 max-w-3xl text-muted-foreground">
                    Sniprl isn&rsquo;t trying to be everything. We focus on what matters most: speed, simplicity, and transparency.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: DollarSign,
                            title: "100% Free, No Catch",
                            desc: "No freemium limits, no credit card required. Unlimited links, unlimited analytics.",
                        },
                        {
                            icon: UserX,
                            title: "No Sign-Up Required",
                            desc: "Shorten any URL instantly without creating an account. Sign in only if you want a dashboard.",
                        },
                        {
                            icon: BarChart3,
                            title: "Free Click Analytics",
                            desc: "Every link gets real-time click tracking — a feature Bitly charges $29/mo for.",
                        },
                        {
                            icon: Download,
                            title: "Direct Download Links",
                            desc: "Auto-converts Google Drive, Dropbox & Mega links to direct downloads. No other shortener does this.",
                        },
                        {
                            icon: Shield,
                            title: "Open Source",
                            desc: "Fully open source on GitHub. Audit the code, self-host it, or contribute.",
                        },
                        {
                            icon: Zap,
                            title: "Blazing Fast",
                            desc: "Built on Next.js with edge-optimized redirects. Your short links resolve in milliseconds.",
                        },
                    ].map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-border/50 bg-card p-6"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold">{title}</h3>
                            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* The Honest Take */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    The Honest Take
                </h2>
                <div className="mt-4 rounded-2xl border border-border/50 bg-muted/30 p-6 sm:p-8">
                    <p className="text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Bitly</strong> is the industry leader with enterprise features, branded domains, and
                        deep integrations. If you&rsquo;re a large marketing team, Bitly&rsquo;s paid plans might be worth it.
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">TinyURL</strong> is the OG shortener — simple and reliable, but it lacks analytics
                        and a proper dashboard.
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Sniprl</strong> is the best choice if you want{" "}
                        <strong className="text-foreground">free analytics, no ads, and direct download link support</strong>.
                        We&rsquo;re open source, privacy-first, and perfect for developers, students, and creators who
                        don&rsquo;t want to pay $29/mo for basic link tracking.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="mt-20 text-center">
                <h2 className="text-3xl font-bold tracking-tight">
                    Ready to try Sniprl?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                    Shorten your first link in under 3 seconds. No sign-up needed.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-xl px-10 font-semibold shadow-md">
                    <Link href="/" className="flex items-center gap-2">
                        Start Shortening <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </section>
        </div>
    );
}
