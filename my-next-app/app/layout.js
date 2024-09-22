import {
    IBM_Plex_Mono,
    Fira_Code,
    JetBrains_Mono,
    Fira_Sans,
} from "next/font/google";

import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const firaSans = Fira_Sans({
    subsets: ["latin"],
    weight: ["300", "500"],
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
            <body className="font-carme min-h-screen flex flex-col">
                <div className="overflow-y-scroll h-full">
                    <Navbar />

                    <main className="flex-grow w-[340px] nav_break_2:w-[600px] my-16 mx-auto max-[600px]:mb-24">
                        {/* <Filepath /> */}
                        {children}
                    </main>
                </div>

                <footer className="">
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
