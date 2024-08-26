import Link from "next/link";

export default function Navbar() {
    return (
        <div className="text-cente flex justify-around my-5">
            <div className="flex gap-10">
                <Link href="/" className="hover:underline">
                    home
                </Link>
                <Link href="/info" className="hover:underline">
                    info
                </Link>
                <Link href="/projects" className="hover:underline">
                    projects
                </Link>
            </div>
        </div>
    );
}
