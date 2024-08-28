import Link from "next/link";

export default function HomePage() {
    return (
        <div className="">
            <div className="flex flex-col my-5">
                <h1 className="heading1"># welcome</h1>
                <p>Hello, I'm Loic!</p>
            </div>
            <div className="flex flex-col  my-5">
                <div className="flex">
                    <h1 className="heading1 flex"># quick links</h1>
                </div>
            </div>
            <div className="flex flex-col  my-5">
                <div className="flex">
                    <h1 className="heading1 flex"># highlights</h1>
                </div>
                <Link
                    href="/home/news"
                    className="hover:underline text-right mb-2"
                >
                    view all →
                </Link>
            </div>
        </div>
    );
}
