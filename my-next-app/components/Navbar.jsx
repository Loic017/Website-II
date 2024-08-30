"use client";
import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="mt-1 transition-all">
            <Image src={banner} alt="Banner" className="rounded-sm" />
            <div className="min-[600px]:flex hidden text-cente justify-around my-3 border-l-2 border-r-2 border-gray-400 overflow-hidden">
                <div className="flex gap-7">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/info" className="hover:underline">
                        Info
                    </Link>
                    <Link href="/achievements" className="hover:underline">
                        Achievements
                    </Link>
                    <Link href="/experience" className="hover:underline">
                        Experience
                    </Link>

                    <Link href="/projects" className="hover:underline">
                        Projects
                    </Link>
                    <Link href="/archive" className="hover:underline">
                        Archive
                    </Link>
                </div>
            </div>
            <div className="min-[600px]:hidden flex fixed  right-0 bottom-0 m-5">
                <button
                    className="text-white bg-black rounded-md p-2 border-2 border-gray-400 w-24 h-16"
                    onClick={toggleMenu}
                    style={{ backgroundColor: "rgb( 30, 32, 30)" }}
                >
                    Menu
                </button>
            </div>
            {menuOpen && (
                <div
                    className="min-[600px]:hidden fixed right-0 bottom-0 w-full px-10 text-right py-5 rounded-l-md border-2 border-gray-400"
                    style={{ backgroundColor: "rgb( 30, 32, 30)" }}
                >
                    <div className="flex flex-col gap-7">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <Link href="/info" className="hover:underline">
                            Info
                        </Link>
                        <Link href="/achievements" className="hover:underline">
                            Achievements
                        </Link>
                        <Link href="/experience" className="hover:underline">
                            Experience
                        </Link>

                        <Link href="/projects" className="hover:underline">
                            Projects
                        </Link>
                        <Link href="/archive" className="hover:underline">
                            Archive
                        </Link>
                        <button onClick={toggleMenu}>[X] Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
