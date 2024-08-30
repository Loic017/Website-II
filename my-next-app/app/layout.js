import { IBM_Plex_Mono, Fira_Code, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "../components/Navbar";
import Filepath from "../components/Filepath";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const firaCode = Fira_Code({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "Loic",
    description: "Hello There!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="#" href="#" />
            </head>
            <body className={firaCode.className}>
                <div className="w-[350px] min-[700px]:w-[600px] my-2 mx-auto max-[600px]:mb-24">
                    <Filepath />
                    <Navbar />
                    <div>{children}</div>
                </div>
            </body>
        </html>
    );
}
