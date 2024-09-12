"use client";
import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";
import { useState } from "react";
import Filepath from "../components/Filepath";

import { CgCloseR } from "react-icons/cg";
import { FaHamburger } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { usePathname } from "next/navigation";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    // const acpathname = "/" + pathname.split("/")[1];

    // const a = "/news";
    // console.log("/" + a.split("/")[1]);

    // console.log(acpathname);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="mb-5 transition-all text-gray-200 text-14px">
            <div className="min-[1300px]:bg-black flex w-full fixed top-0 z-30 nav-back py-[0.7rem] px-6 border-b border-gray-100 border-opacity-20 text-left justify-between">
                <button className="min-[1300px]:hidden" onClick={toggleMenu}>
                    <FaHamburger />
                </button>
                <h1 className="text-14px font-bold">Loic Lorente Lemoine</h1>
            </div>
            {menuOpen && (
                <div
                    className={`z-0 fixed left-0 top-0 w-screen h-screen bg-black opacity-60 menu-transition ${
                        menuOpen ? "menu-open" : ""
                    }`}
                >
                    <h1>asdasd</h1>
                </div>
            )}
            <div
                className={`nav-back h-screen fixed top-0 left-0 border-r border-gray-100 border-opacity-20 min-[600px]:w-[290px] w-[310px] text-left px-3 py-2 menu-transition ${
                    menuOpen ? "menu-open" : ""
                }`}
            >
                <div className="text-left nav-back min-h-[37px] flex flex-col justify-center font-bold">
                    <span className="flex items-center gap-4">
                        <button
                            className="cursor-move min-[1300px]:hidden"
                            onClick={toggleMenu}
                        >
                            <CgCloseR />
                        </button>
                        <h1 className="text-14px pl-3">Loic Lorente Lemoine</h1>
                    </span>
                </div>

                <div className="text-left h-full space-y-1 nav-back flex flex-col z-20">
                    <div className="flex flex-col gap-7 flex-grow">
                        {sections.map((section, index) => (
                            <div key={index}>
                                <h4 className="nav-heading">{section}</h4>
                                <div className="flex flex-col gap-1">
                                    {pages
                                        .filter(
                                            (page) => page.section === section
                                        )
                                        .map((page, index) => (
                                            <Link
                                                key={index}
                                                href={page.href}
                                                className={`nav-link flex items-center gap-3 hover:bg-[#404040] hover:rounded-md py-[0.35rem] ${
                                                    "/" +
                                                        pathname.split(
                                                            "/"
                                                        )[1] ===
                                                    "/" +
                                                        page.href.split("/")[1]
                                                        ? "active-link"
                                                        : ""
                                                }`}
                                            >
                                                <div className="text-base pl-2">
                                                    <page.icon />
                                                </div>
                                                <div className="flex-grow">
                                                    {page.page_name}
                                                </div>
                                                {page.external === true && (
                                                    <div className="text-md flex-shrink-0 pr-2">
                                                        <FiArrowUpRight />
                                                    </div>
                                                )}
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const sections = ["", "Me", "Work", "Links"];

import { GoHomeFill as HomeLogo } from "react-icons/go";
import { FaNewspaper as NewsLogo } from "react-icons/fa";
import { FaArchive as ArchiveLogo } from "react-icons/fa";
import { GoPersonFill as InfoLogo } from "react-icons/go";
import { BiSolidTimeFive as TimelineLogo } from "react-icons/bi";
import { SiPublons as PublicationsLogo } from "react-icons/si";
import { FaMagnifyingGlassArrowRight as ResearchLogo } from "react-icons/fa6";
import { BsFillProjectorFill as WorkLogo } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const pages = [
    {
        page_name: "Home",
        href: "/",
        section: "",
        icon: HomeLogo,
        external: false,
    },
    {
        page_name: "News",
        href: "/news",
        section: "",
        icon: NewsLogo,
        external: false,
    },
    {
        page_name: "Archive",
        href: "/archive",
        section: "",
        icon: ArchiveLogo,
        external: false,
    },
    {
        page_name: "Info",
        href: "/info",
        section: "Me",
        icon: InfoLogo,
        external: false,
    },
    {
        page_name: "Timeline",
        href: "/timeline",
        section: "Me",
        icon: TimelineLogo,
        external: false,
    },
    {
        page_name: "Publications",
        href: "/publications",
        section: "Work",
        icon: PublicationsLogo,
        external: false,
    },
    {
        page_name: "Research Work",
        href: "/research",
        section: "Work",
        icon: ResearchLogo,
        external: false,
    },
    {
        page_name: "Other Work",
        href: "/other-Work",
        section: "Work",
        icon: WorkLogo,
        external: false,
    },
    {
        page_name: "GitHub",
        href: "/a",
        section: "Links",
        icon: FaGithub,
        external: true,
    },
    {
        page_name: "LinkedIn",
        href: "/b",
        section: "Links",
        icon: FaLinkedin,
        external: true,
    },
    {
        page_name: "Email",
        href: "/c",
        section: "Links",
        icon: MdEmail,
        external: true,
    },
    {
        page_name: "Resumse / CV",
        href: "/d",
        section: "Links",
        icon: FaPen,
        external: true,
    },
];
