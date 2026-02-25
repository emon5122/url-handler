import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Learn how Sniprl collects, uses, and protects your personal information. We value your privacy and are transparent about our data practices.",
    alternates: { canonical: "/privacy" },
};

const PrivacyPolicy = () => {
    return (
        <article className="prose prose-neutral mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h1>Privacy Policy</h1>
            <p className="lead">
                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                When you use Sniprl, we may collect the following types of information:
            </p>
            <ul>
                <li>
                    <strong>Account Information:</strong> If you sign in via a third-party provider
                    (e.g., Google, GitHub), we receive your name, email address, and profile picture.
                </li>
                <li>
                    <strong>URL Data:</strong> The original URLs you shorten and the generated short
                    links, along with click counts and timestamps.
                </li>
                <li>
                    <strong>Usage Data:</strong> Pages visited, browser type, device information, and
                    IP address for analytics and fraud prevention.
                </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
                <li>To provide and maintain the URL shortening service.</li>
                <li>To display click analytics on your dashboard.</li>
                <li>To improve our service and user experience.</li>
                <li>To detect and prevent abuse or fraudulent activity.</li>
            </ul>

            <h2>3. Third-Party Services</h2>
            <p>
                We use third-party services that may collect information used to identify you:
            </p>
            <ul>
                <li>
                    <strong>Vercel Analytics:</strong> We use Vercel Analytics to understand aggregate
                    usage patterns.
                </li>
                <li>
                    <strong>Authentication Providers:</strong> Google and GitHub OAuth for sign-in.
                </li>
            </ul>

            <h2>4. Cookies</h2>
            <p>
                We use cookies for authentication sessions and to remember your theme preference.
                You can manage cookies through your browser settings.
            </p>

            <h2>5. Data Retention</h2>
            <p>
                We retain your account information and URL data for as long as your account is
                active. You may delete individual links from your dashboard at any time.
            </p>

            <h2>6. Your Rights</h2>
            <p>
                You have the right to access, correct, or delete your personal data. Contact us at{" "}
                <a href="mailto:support@nexisltd.com">support@nexisltd.com</a> for any data-related
                requests.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated revision date.
            </p>

            <h2>8. Contact</h2>
            <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@nexisltd.com">support@nexisltd.com</a>.
            </p>
        </article>
    );
};

export default PrivacyPolicy;
