import Logo from "@/components/logo";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-muted/20">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/">
                            <Logo size="sm" />
                        </Link>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                            The fastest free URL shortener. Shorten, share, and
                            track your links with ease.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Product
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="transition hover:text-foreground">
                                    URL Shortener
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="transition hover:text-foreground">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/analytics" className="transition hover:text-foreground">
                                    Click Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="/features/direct-downloads" className="transition hover:text-foreground">
                                    Direct Downloads
                                </Link>
                            </li>
                            <li>
                                <Link href="/compare" className="transition hover:text-foreground">
                                    Compare Shorteners
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Company
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="https://nexisltd.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition hover:text-foreground"
                                >
                                    About Nexis LTD
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Legal
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/privacy" className="transition hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="transition hover:text-foreground">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        &copy; {year} Nexis LTD. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Made with care for the web.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
