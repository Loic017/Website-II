"use client";
import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";
import { useState } from "react";
import Filepath from "../components/Filepath";

import { CgCloseR } from "react-icons/cg";
import { FaHamburger } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="mt-1 mb-5 transition-all">
            {/* <Image src={banner} alt="Banner" className="rounded-sm" /> */}
            <div className="fixed left-0 w-80 pl-5 text-left h-full py-[0.65rem] nav-back">
                <div className="flex gap-5">
                    <p>Loic Lorente Lemoine</p>
                </div>

                <div className="flex flex-col gap-7">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h1 className="nav-heading">{section}</h1>
                            <div className="flex flex-col gap-2">
                                {pages
                                    .filter((page) => page.section === section)
                                    .map((page, index) => (
                                        <Link
                                            key={index}
                                            href={page.href}
                                            className="nav-link flex flex-row items-center gap-2"
                                        >
                                            <page.icon />
                                            {page.page_name}
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="min-[600px]:hidden flex w-full fixed top-0">
                <button
                    className="nav-back py-[1rem] px-6 border-b-[1.5px] border-gray-800 w-full text-left flex justify-between"
                    onClick={toggleMenu}
                >
                    <FaHamburger />
                </button>
            </div>
            {menuOpen && (
                <div className="min-[600px]:hidden fixed left-0 w-80 pl-5 text-left h-full py-[0.65rem] nav-back">
                    <div className="flex gap-5">
                        <button className="" onClick={toggleMenu}>
                            <CgCloseR />
                        </button>
                        <p>Loic Lorente Lemoine</p>
                    </div>

                    <div className="flex flex-col gap-7">
                        {sections.map((section, index) => (
                            <div key={index}>
                                <h1 className="nav-heading">{section}</h1>
                                <div className="flex flex-col gap-2">
                                    {pages
                                        .filter(
                                            (page) => page.section === section
                                        )
                                        .map((page, index) => (
                                            <Link
                                                key={index}
                                                href={page.href}
                                                className="nav-link flex flex-row items-center gap-2"
                                            >
                                                <page.icon />
                                                {page.page_name}
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const sections = ["", "Me", "Projects", "Contact"];

const pages = [
    {
        page_name: "Home",
        href: "/",
        section: "",
        icon: FaHamburger,
    },
    {
        page_name: "News",
        href: "/news",
        section: "",
        icon: FaHamburger,
    },
    {
        page_name: "Info",
        href: "/info",
        section: "Me",
        icon: FaHamburger,
    },
    {
        page_name: "Timeline",
        href: "/timeline",
        section: "Me",
        icon: FaHamburger,
    },
    {
        page_name: "Research",
        href: "/research",
        section: "Projects",
        icon: FaHamburger,
    },
    {
        page_name: "Other",
        href: "/other-projects",
        section: "Projects",
        icon: FaHamburger,
    },
];
