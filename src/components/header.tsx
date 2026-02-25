"use client";

import Logo from "@/components/logo";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import {
    LayoutDashboard,
    LogIn,
    LogOut,
} from "lucide-react";
import { getSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const { data: session, isLoading } = useQuery({
        queryFn: async () => await getSession(),
        queryKey: ["session"],
        staleTime: Infinity,
    });

    return (
        <header className="glass sticky top-0 z-50 border-b border-border/40">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <Link href="/">
                    <Logo />
                </Link>

                {/* Right side */}
                <div className="flex items-center gap-2">

                    {isLoading ? (
                        <Skeleton className="h-9 w-9 rounded-full" />
                    ) : session ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <Avatar className="h-8 w-8">
                                        {session.user?.image ? (
                                            <Image
                                                src={session.user.image}
                                                width={32}
                                                height={32}
                                                alt="Profile"
                                                className="rounded-full"
                                            />
                                        ) : (
                                            <span className="flex h-full w-full items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                                                {session.user?.name
                                                    ?.split(" ")
                                                    .slice(0, 2)
                                                    .map((n) => n.charAt(0).toUpperCase())
                                                    .join("")}
                                            </span>
                                        )}
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end" className="w-48">
                                {session.user?.name && (
                                    <>
                                        <div className="px-2 py-1.5">
                                            <p className="text-sm font-medium leading-none">
                                                {session.user.name}
                                            </p>
                                            {session.user.email && (
                                                <p className="mt-0.5 text-xs text-muted-foreground">
                                                    {session.user.email}
                                                </p>
                                            )}
                                        </div>
                                        <DropdownMenuSeparator />
                                    </>
                                )}
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/dashboard"
                                        className="flex items-center gap-2"
                                    >
                                        <LayoutDashboard className="h-4 w-4" />
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/api/auth/signout"
                                        className="flex items-center gap-2 text-destructive focus:text-destructive"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        Sign out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button asChild variant="default" size="sm" className="rounded-lg font-semibold">
                            <Link href="/auth/signin" className="flex items-center gap-1.5">
                                <LogIn className="h-4 w-4" />
                                Sign in
                            </Link>
                        </Button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
