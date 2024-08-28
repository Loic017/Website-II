import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

export default function Navbar() {
    return (
        <div className="mt-1">
            <Image src={banner} alt="Banner" className="rounded-sm" />
            <div className="text-cente flex justify-around my-3 border-l-2 border-r-2 border-gray-400">
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
        </div>
    );
}
