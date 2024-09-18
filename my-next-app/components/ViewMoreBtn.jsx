import Link from "next/link";

export default function ViewMoreBtn({ to = "/", text = "View More" }) {
    return (
        <div>
            <Link
                href={to}
                className="bg-white px-5 py-1 rounded-md text-black hover:bg-slate-200 transition-a"
            >
                <b>{text}</b>
            </Link>
        </div>
    );
}
