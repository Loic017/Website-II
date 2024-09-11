import {
    IBM_Plex_Mono,
    Fira_Code,
    JetBrains_Mono,
    Fira_Sans,
} from "next/font/google";

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
            <body className="font-carme">
                <div className="h-full">
                    <div className="">
                        <Navbar />
                        <div className="">
                            <div className="w-[380px] min-[700px]:w-[600px] my-16 mx-auto max-[600px]:mb-24">
                                {/* <Filepath /> */}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
