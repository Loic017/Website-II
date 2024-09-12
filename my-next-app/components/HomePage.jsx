import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllNews } from "../utility/load_news";
import NewsLoad from "./reusable/NewsLoad";

export default async function HomePage() {
    const allNews = getAllNews();
    const news = allNews.slice(0, 3);
    const writings = allNews.slice(0, 1);

    return (
        <div className="">
            <div className="flex flex-col">
                <h1 className="heading1">welcome</h1>
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
                    <NewsLoad news={writings} />
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
