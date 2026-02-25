"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { baseUrl } from "@/lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
    BarChart3,
    Copy,
    ExternalLink,
    Link2,
    MousePointerClick,
    Trash2,
} from "lucide-react";
import Link from "next/link";

type Url = {
    id: string;
    generatedUrl: string;
    givenUrl: string;
    createdAt: Date;
    lastAccessedAt: Date | null;
    openedCount: number;
    type: "PUBLIC" | "PRIVATE";
};

const Dashboard = () => {
    const { toast } = useToast();
    const queryClient = useQueryClient();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["url"],
        queryFn: async () => {
            const res = await axios.get("/api/url");
            return res.data;
        },
        staleTime: 50000,
    });

    const deleteUrl = useMutation({
        mutationFn: async (id: string) => axios.delete(`/api/url/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["url"] });
            toast({ title: "Deleted", description: "Link has been removed." });
        },
    });

    const copyLink = (url: string) => {
        navigator.clipboard.writeText(url).then(() => {
            toast({ title: "Copied!", description: "Link copied to clipboard.", duration: 2000 });
        });
    };

    const totalClicks =
        data?.allUrls?.reduce((sum: number, u: Url) => sum + u.openedCount, 0) ?? 0;

    /* ── Stat cards ── */
    const StatCard = ({
        icon: Icon,
        label,
        value,
        accent = false,
    }: {
        icon: React.ElementType;
        label: string;
        value: string | number;
        accent?: boolean;
    }) => (
        <div className="rounded-2xl border border-border/50 bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                        }`}
                >
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {label}
                    </p>
                    <p className="text-2xl font-bold">{value}</p>
                </div>
            </div>
        </div>
    );

    /* ── Loading skeleton ── */
    if (isLoading) {
        return (
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                <Skeleton className="mb-8 h-8 w-48" />
                <div className="grid gap-4 sm:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <Skeleton key={i} className="h-24 rounded-2xl" />
                    ))}
                </div>
                <div className="mt-8 space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="h-14 rounded-xl" />
                    ))}
                </div>
            </div>
        );
    }

    if (isError) throw new Error("Failed to load dashboard data.");

    /* ── Empty state ── */
    if (!data?.allUrls?.length) {
        return (
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Dashboard</h1>
                <div className="mt-16 flex flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                        <Link2 className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold">No links yet</h2>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        You haven&rsquo;t shortened any URLs. Go to the homepage and create your first
                        short link!
                    </p>
                    <Button asChild className="mt-6 rounded-xl font-semibold">
                        <Link href="/">Shorten a URL</Link>
                    </Button>
                </div>
            </div>
        );
    }

    /* ── Main dashboard ── */
    return (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Dashboard</h1>
            <p className="mt-1 text-sm text-muted-foreground">
                Manage and track all your shortened links.
            </p>

            {/* Stats */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <StatCard icon={Link2} label="Total Links" value={data.count} accent />
                <StatCard icon={MousePointerClick} label="Total Clicks" value={totalClicks} />
                <StatCard
                    icon={BarChart3}
                    label="Avg. Clicks / Link"
                    value={data.count ? (totalClicks / data.count).toFixed(1) : "0"}
                />
            </div>

            {/* Table */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="w-12">#</TableHead>
                                <TableHead>Short Link</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Original URL
                                </TableHead>
                                <TableHead className="hidden lg:table-cell">Created</TableHead>
                                <TableHead className="text-center">Clicks</TableHead>
                                <TableHead className="hidden sm:table-cell">Type</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.allUrls.map((url: Url, index: number) => {
                                const shortUrl = `${baseUrl}/d/${url.generatedUrl}`;
                                return (
                                    <TableRow key={url.id} className="group">
                                        <TableCell className="text-muted-foreground">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={`/d/${url.generatedUrl}`}
                                                    target="_blank"
                                                    className="max-w-50 truncate text-sm font-medium text-primary hover:underline"
                                                >
                                                    {shortUrl}
                                                </Link>
                                                <button
                                                    onClick={() => copyLink(shortUrl)}
                                                    className="opacity-0 transition group-hover:opacity-100"
                                                    title="Copy"
                                                >
                                                    <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                                                </button>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            <Link
                                                href={url.givenUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex max-w-62.5 items-center gap-1 truncate text-sm text-muted-foreground hover:text-foreground"
                                            >
                                                {url.givenUrl}
                                                <ExternalLink className="h-3 w-3 shrink-0" />
                                            </Link>
                                        </TableCell>
                                        <TableCell className="hidden text-sm text-muted-foreground lg:table-cell">
                                            {new Date(url.createdAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <span className="inline-flex min-w-8 items-center justify-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                                                {url.openedCount}
                                            </span>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <span
                                                className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${url.type === "PUBLIC"
                                                    ? "bg-emerald-500/10 text-emerald-600"
                                                    : "bg-amber-500/10 text-amber-600"
                                                    }`}
                                            >
                                                {url.type.charAt(0) + url.type.slice(1).toLowerCase()}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 gap-1.5 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
                                                onClick={() => deleteUrl.mutate(url.id)}
                                                disabled={deleteUrl.isPending}
                                            >
                                                <Trash2 className="h-3.5 w-3.5" />
                                                <span className="hidden sm:inline">Delete</span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
