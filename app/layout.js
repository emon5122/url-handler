import "./globals.css";
import { Inter, Stylish } from "next/font/google";
import Header from "./header";

export const Sttylish = Stylish({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-stylish",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "URL Handler",
    description: "Created By Istiak Hassan Emon",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`bg-slate-800 ${inter.className} pt-16`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
