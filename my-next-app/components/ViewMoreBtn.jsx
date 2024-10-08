import Link from "next/link";

export default function ViewMoreBtn({
    to = "/",
    text = "View More",
    external = false,
}) {
    return (
        <Link
            href={to}
            className="bg-gray-200 px-5 py-1 rounded-md text-black hover-scale-button flex justify-center items-center"
            target={external ? "_blank" : "_self"}
        >
            <b>{text}</b>
        </Link>
    );
}
