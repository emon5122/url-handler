import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Read the terms and conditions for using the Sniprl URL shortening service. Understand your rights and responsibilities when using our platform.",
    alternates: { canonical: "/terms" },
};

const TermsOfService = () => {
    return (
        <article className="prose prose-neutral mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h1>Terms of Service</h1>
            <p className="lead">
                Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing or using Sniprl (&ldquo;the Service&rdquo;), you agree to be bound by
                these Terms of Service. If you do not agree, please do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
                Sniprl provides a free URL shortening service that allows users to create shortened
                links, track click analytics, and manage their links via a personal dashboard.
            </p>

            <h2>3. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
                <li>Shorten URLs that link to illegal, malicious, or harmful content.</li>
                <li>Distribute spam, malware, phishing links, or any deceptive content.</li>
                <li>Infringe on the intellectual property rights of others.</li>
                <li>Attempt to disrupt, overload, or interfere with the Service.</li>
            </ul>
            <p>
                We reserve the right to disable or remove any links that violate these terms without
                prior notice.
            </p>

            <h2>4. Accounts</h2>
            <p>
                You may use the Service without an account for basic URL shortening. Signing in
                provides access to analytics and link management features. You are responsible for
                maintaining the security of your account credentials.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
                The Service, its design, code, and branding are the property of Nexis LTD. You
                retain ownership of the URLs you shorten and the content they link to.
            </p>

            <h2>6. Disclaimer of Warranties</h2>
            <p>
                The Service is provided &ldquo;as is&rdquo; without warranties of any kind, express
                or implied. We do not guarantee that the Service will be uninterrupted, error-free,
                or secure.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
                To the fullest extent permitted by law, Nexis LTD shall not be liable for any
                indirect, incidental, special, or consequential damages arising from your use of the
                Service.
            </p>

            <h2>8. Modifications</h2>
            <p>
                We may update these Terms at any time. Continued use of the Service after changes
                constitutes acceptance of the updated terms.
            </p>

            <h2>9. Contact</h2>
            <p>
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:support@nexisltd.com">support@nexisltd.com</a>.
            </p>
        </article>
    );
};

export default TermsOfService;
