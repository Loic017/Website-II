import Link from "next/link";

export default function Navbar() {
    return (
        <div className="text-cente flex justify-around mb-5">
            <div className="flex gap-10">
                <Link href="/" className="">
                    Home
                </Link>
                <Link href="/" className="">
                    Info
                </Link>
                <Link href="/" className="">
                    Projects
                </Link>
            </div>
        </div>
    );
}
