import { IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "../components/Navbar";

const ibmPlexMono = IBM_Plex_Mono({
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
            <body className={ibmPlexMono.className}>
                <div className="w-[700px] mt-5 mx-auto">
                    <p>filler/f/user/</p>
                    <Navbar />
                    <div>{children}</div>
                </div>
            </body>
        </html>
    );
}
