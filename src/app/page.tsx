"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    Check,
    Copy,
    Globe,
    Link2,
    MousePointerClick,
    Shield,
    Zap,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

/* ── Animation helpers ─────────────────────────────────────── */
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
    }),
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const Home = () => {
    const [genLink, setGenLink] = useState("");
    const [copied, setCopied] = useState(false);
    const queryClient = useQueryClient();
    const { toast } = useToast();

    const urlMutation = useMutation({
        mutationFn: async ({ url }: { url: string }) => {
            const res = await axios.post("/api/url", { url });
            setGenLink(res.data);
        },
        mutationKey: ["url"],
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["url"] });
            toast({
                title: "Link shortened!",
                description: "Your new short link is ready to share.",
                duration: 4000,
            });
        },
    });

    const form = useForm({
        resolver: zodResolver(
            z.object({ url: z.string().url("Please enter a valid URL") })
        ),
        defaultValues: { url: "" },
    });

    const copyUrl = (link: string) => {
        if (!link || typeof window === "undefined") return;
        window.navigator.clipboard
            .writeText(link)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                toast({ title: "Copied!", description: "Link copied to clipboard.", duration: 2000 });
            })
            .catch(() => {
                toast({ title: "Failed", description: "Couldn't copy — please try again.", duration: 2000 });
            });
    };

    return (
        <>
            {/* ───────── Hero ───────── */}
            <section className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute -top-24 left-1/2 h-125 w-200 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
                        className="absolute top-40 right-0 h-75 w-100 rounded-full bg-violet-400/10 blur-3xl"
                    />
                </div>

                <div className="mx-auto max-w-5xl px-4 pt-28 pb-20 text-center sm:px-6 lg:px-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                        <Zap className="h-3.5 w-3.5" />
                        Free &amp; Lightning Fast
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Shorten URLs.{" "}
                        <span className="gradient-text">Share Smarter.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                    >
                        Transform long, ugly links into clean, trackable short
                        URLs in a single click. Paste your link and go.
                    </motion.p>

                    {/* ── Shortener form ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="mx-auto mt-10 max-w-2xl"
                    >
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit((d) => urlMutation.mutate(d))}
                                className="flex flex-col gap-3 sm:flex-row"
                            >
                                <FormField
                                    control={form.control}
                                    name="url"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormControl>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/your-very-long-url"
                                                    className="h-12 rounded-xl border-border/60 bg-card text-base shadow-sm transition focus-visible:ring-2 focus-visible:ring-primary/40"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="h-12 cursor-pointer rounded-xl px-8 text-base font-semibold shadow-md transition-all hover:shadow-lg hover:brightness-110"
                                    disabled={urlMutation.isPending}
                                >
                                    {urlMutation.isPending ? (
                                        <span className="flex items-center gap-2">
                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                                            Shortening…
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Shorten <ArrowRight className="h-4 w-4" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </Form>

                        {/* Result */}
                        {genLink && (
                            <motion.div
                                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="mt-4 flex items-center gap-2 rounded-xl border border-border/60 bg-card p-3 shadow-sm"
                            >
                                <Link2 className="hidden h-5 w-5 shrink-0 text-primary sm:block" />
                                <span className="flex-1 truncate text-left text-sm font-medium">
                                    {genLink}
                                </span>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="shrink-0 gap-1.5 text-xs font-semibold text-primary hover:text-primary cursor-pointer"
                                    onClick={() => copyUrl(genLink)}
                                >
                                    {copied ? (
                                        <>
                                            <Check className="h-3.5 w-3.5" /> Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-3.5 w-3.5" /> Copy
                                        </>
                                    )}
                                </Button>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Social proof */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 text-sm text-muted-foreground"
                    >
                        No sign-up required &middot; No ads on your links &middot; 100 % free
                    </motion.p>
                </div>
            </section>

            {/* ───────── Features ───────── */}
            <section className="border-t border-border/40 bg-muted/30 py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        custom={0}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Everything you need in a URL shortener
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                            Simple, powerful, and totally free.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={staggerContainer}
                        className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {[
                            {
                                icon: Zap,
                                title: "Instant Shortening",
                                desc: "Paste your link, hit shorten, done. No delays, no friction.",
                            },
                            {
                                icon: BarChart3,
                                title: "Click Analytics",
                                desc: "Track every click — see how your links perform with real-time stats.",
                            },
                            {
                                icon: Shield,
                                title: "Secure & Private",
                                desc: "All links served over HTTPS. Your data stays yours.",
                            },
                            {
                                icon: Globe,
                                title: "Works Everywhere",
                                desc: "Short links that work on every platform, browser, and device.",
                            },
                            {
                                icon: MousePointerClick,
                                title: "Smart Downloads",
                                desc: "Google Drive, Dropbox, & Mega links auto-convert to direct downloads.",
                            },
                            {
                                icon: Link2,
                                title: "Dashboard",
                                desc: "Manage all your links in one place. Edit, delete, and organize.",
                            },
                        ].map(({ icon: Icon, title, desc }, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                            >
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-semibold">{title}</h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                                    {desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ───────── How it works ───────── */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        custom={0}
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Three steps. That&rsquo;s it.
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                            No accounts needed — just paste, shorten, and share.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={staggerContainer}
                        className="mt-14 grid gap-10 sm:grid-cols-3"
                    >
                        {[
                            { step: "1", title: "Paste your URL", desc: "Drop any long link into the input field above." },
                            { step: "2", title: "Get a short link", desc: "We generate a unique, tiny URL instantly." },
                            { step: "3", title: "Share anywhere", desc: "Copy it and use it on social media, emails, or anywhere." },
                        ].map(({ step, title, desc }) => (
                            <motion.div key={step} variants={fadeUp} custom={Number(step)} className="flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground shadow-lg"
                                >
                                    {step}
                                </motion.div>
                                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ───────── FAQ ───────── */}
            <section className="py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        custom={0}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                            Everything you need to know about Sniprl.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={staggerContainer}
                        className="mt-12 space-y-6"
                    >
                        {[
                            {
                                q: "Is Sniprl free to use?",
                                a: "Yes, Sniprl is completely free. You can shorten unlimited URLs, track clicks, and manage your links without any cost or sign-up.",
                            },
                            {
                                q: "Do I need to create an account to shorten URLs?",
                                a: "No account is required to shorten URLs. However, signing in with Google or GitHub gives you access to a personal dashboard where you can manage and track all your links.",
                            },
                            {
                                q: "Does Sniprl support direct download links?",
                                a: "Yes, Sniprl automatically converts Google Drive, Dropbox, and Mega sharing links into direct download links, making file sharing much easier.",
                            },
                            {
                                q: "Can I track how many clicks my short link gets?",
                                a: "Yes, every shortened link comes with real-time click analytics. Sign in to your dashboard to view detailed click counts for all your links.",
                            },
                            {
                                q: "Is Sniprl a good alternative to Bitly or TinyURL?",
                                a: "Absolutely. Sniprl offers instant URL shortening, click analytics, direct download link conversion, and a full management dashboard — all completely free with no ads on your links.",
                            },
                        ].map(({ q, a }, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="rounded-2xl border border-border/50 bg-card p-6"
                            >
                                <h3 className="text-base font-semibold">{q}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {a}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ───────── CTA ───────── */}
            <section className="border-t border-border/40 bg-muted/30 py-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="mx-auto max-w-3xl px-4 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready to shorten your first link?
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                        Join thousands of users who trust Sniprl for fast, reliable link management.
                    </p>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            size="lg"
                            className="mt-8 rounded-xl px-10 text-base font-semibold shadow-md transition-all hover:shadow-lg hover:brightness-110 cursor-pointer"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            Get Started — It&rsquo;s Free
                        </Button>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default Home;
