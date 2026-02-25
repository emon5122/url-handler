import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Eye, MousePointerClick, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Free Link Click Analytics — Track URL Clicks Without Paying",
    description:
        "Track clicks on your shortened links for free. Sniprl gives you real-time URL click analytics, view counts, and link performance tracking — no paid plan required.",
    keywords: [
        "link click tracker",
        "url click analytics",
        "free link analytics",
        "track url clicks",
        "link click counter",
        "url tracking free",
        "short link analytics",
        "free click analytics",
        "link performance tracking",
        "how many clicks on my link",
        "url shortener with analytics",
        "free url analytics",
        "bitly analytics alternative free",
    ],
    alternates: { canonical: "/features/analytics" },
    openGraph: {
        title: "Free Link Click Analytics — Track Every Click",
        description:
            "Real-time click analytics for your short links. Free, no sign-up, no limits.",
    },
};

export default function AnalyticsFeaturePage() {
    return (
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Hero */}
            <div className="text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                    <BarChart3 className="h-3.5 w-3.5" />
                    Free — No Paid Plan Needed
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Free Link Click{" "}
                    <span className="gradient-text">Analytics</span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Know exactly how your links perform. Sniprl tracks every click on your shortened
                    URLs in real time — completely free, no premium plan required.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-xl px-10 font-semibold shadow-md">
                    <Link href="/" className="flex items-center gap-2">
                        Start Tracking Clicks <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>

            {/* What you get */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    What You Get — For Free
                </h2>
                <p className="mt-3 text-muted-foreground">
                    Most URL shorteners charge $29+/mo for analytics. With Sniprl, it&rsquo;s included at no cost.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: Eye,
                            title: "Real-Time Click Counts",
                            desc: "See how many times each link has been clicked, updated in real time on your dashboard.",
                        },
                        {
                            icon: TrendingUp,
                            title: "Link Performance at a Glance",
                            desc: "Quickly identify your top-performing links and see which content resonates with your audience.",
                        },
                        {
                            icon: MousePointerClick,
                            title: "Per-Link Analytics",
                            desc: "Each shortened URL has its own click counter. Track individual campaigns or shared resources separately.",
                        },
                        {
                            icon: BarChart3,
                            title: "Dashboard Overview",
                            desc: "Your personal dashboard shows all links with click stats, creation dates, and status in one clean view.",
                        },
                        {
                            icon: Users,
                            title: "No Account Required to Shorten",
                            desc: "You can shorten links without signing in. Create an account only if you want to save and track links long-term.",
                        },
                        {
                            icon: ArrowRight,
                            title: "Unlimited Links",
                            desc: "No caps on how many links you can create or how many clicks you can track. No premium tiers.",
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

            {/* How it works */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    How to Track Clicks on Your Links
                </h2>
                <div className="mt-8 space-y-6">
                    {[
                        {
                            step: "1",
                            title: "Shorten your URL",
                            desc: "Paste any long URL into Sniprl and get a short link instantly.",
                        },
                        {
                            step: "2",
                            title: "Share it anywhere",
                            desc: "Use your short link on social media, in emails, on websites, or in messages.",
                        },
                        {
                            step: "3",
                            title: "Check your dashboard",
                            desc: "Sign in to see real-time click counts for every link you've created.",
                        },
                    ].map(({ step, title, desc }) => (
                        <div key={step} className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                                {step}
                            </div>
                            <div>
                                <h3 className="font-semibold">{title}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison block */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    Sniprl Analytics vs Bitly Analytics
                </h2>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-border/60 shadow-sm">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border/60 bg-muted/40">
                                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                                <th className="px-6 py-4 text-center font-semibold text-primary">Sniprl</th>
                                <th className="px-6 py-4 text-center font-semibold">Bitly Free</th>
                                <th className="px-6 py-4 text-center font-semibold">Bitly Paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Click counting", "Free", "10 links/mo", "$29/mo"],
                                ["Dashboard", "Free", "Limited", "$29/mo"],
                                ["Link management", "Unlimited", "10 links/mo", "$29/mo"],
                                ["Per-link analytics", "Free", "Limited", "$29/mo"],
                                ["Price", "$0", "$0 (limited)", "$29/mo"],
                            ].map(([feature, sniprl, bitlyFree, bitlyPaid], i) => (
                                <tr
                                    key={feature}
                                    className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}
                                >
                                    <td className="px-6 py-3.5 font-medium">{feature}</td>
                                    <td className="px-6 py-3.5 text-center text-emerald-600 font-medium">{sniprl}</td>
                                    <td className="px-6 py-3.5 text-center text-muted-foreground">{bitlyFree}</td>
                                    <td className="px-6 py-3.5 text-center text-muted-foreground">{bitlyPaid}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* SEO content block */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold tracking-tight">
                    Why Link Click Analytics Matter
                </h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Whether you&rsquo;re sharing content on social media, distributing files, or running a
                        marketing campaign, knowing <strong className="text-foreground">how many people click your links</strong> is
                        essential for understanding engagement and optimizing your strategy.
                    </p>
                    <p>
                        Most URL shorteners either don&rsquo;t offer analytics at all (like TinyURL) or lock them
                        behind expensive paid plans (like Bitly at $29/month). Sniprl believes analytics should
                        be accessible to everyone — students, developers, creators, and small businesses alike.
                    </p>
                    <p>
                        With Sniprl, every shortened link automatically tracks clicks. Sign in with Google or
                        GitHub to access your personal dashboard where you can see all your links, their click
                        counts, and manage them in one place.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="mt-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight">
                    Start tracking your link clicks today
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                    Create your first tracked short link in seconds. No sign-up required.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-xl px-10 font-semibold shadow-md">
                    <Link href="/" className="flex items-center gap-2">
                        Shorten & Track <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </section>
        </div>
    );
}
