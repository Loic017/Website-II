import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllNews } from "../utility/load_news";
import NewsLoad from "./reusable/NewsLoad";

import { getAllWritings } from "../utility/load_writings";
import WritingsLoad from "./reusable/WritingsLoad";

export default async function HomePage() {
    var allNews = getAllNews();

    allNews.sort((a, b) => {
        const aDate = a.date.split(" ");
        const bDate = b.date.split(" ");
        const aMonth = aDate[0];
        const bMonth = bDate[0];
        const aYear = aDate[1];
        const bYear = bDate[1];
        if (aYear === bYear) {
            if (aMonth === bMonth) {
                return 0;
            } else {
                return aMonth > bMonth ? -1 : 1;
            }
        } else {
            return aYear > bYear ? -1 : 1;
        }
    });

    var news = allNews.slice(0, 3);

    const allWritings = getAllWritings();
    const writings = allWritings.slice(0, 2);

    return (
        <div className="">
            <div className="flex flex-col">
                <h1 className="heading1">welcome</h1>
                <p className="paragraph1">
                    This website is still being setup and will constantly be
                    updated with new information. View my old website{" "}
                    <Link href="" className="underline hover:italic">
                        here
                    </Link>
                    .
                </p>
                <Image
                    src={banner}
                    alt="Banner"
                    className="rounded-sm border-l-2 pl-2 my-5"
                />
            </div>
            <div>
                <div className="flex flex-col">
                    <h1 className="heading1">recent writings</h1>
                    {/* <Link href="/news" className="hover:underline text-right">
                        view all →
                    </Link> */}
                </div>
                <div className="flex flex-col">
                    <WritingsLoad news={writings} />
                    <p className="paragraph1 self-center">
                        <Link
                            href="/news"
                            className="hover:underline text-right"
                        >
                            view all →
                        </Link>
                    </p>
                </div>
            </div>
            <div>
                <div className="flex flex-col">
                    <h1 className="heading1">recent highlights</h1>
                    {/* <Link href="/news" className="hover:underline text-right">
                        view all →
                    </Link> */}
                </div>
                <div className="flex flex-col">
                    <NewsLoad news={news} />
                    <p className="paragraph1 self-center">
                        <Link
                            href="/news"
                            className="hover:underline text-right"
                        >
                            view all →
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
