import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllNews } from "../utility/load_news";
import NewsLoad from "./reusable/NewsLoad";

export default async function HomePage() {
    const allNews = getAllNews();
    const news = allNews.slice(0, 5);

    return (
        <div className="">
            <div className="flex flex-col">
                <Image src={banner} alt="Banner" className="rounded-sm mb-2" />
                <h1 className="heading1">welcome</h1>
                <p>Hello, I&apos;m Loic!</p>
            </div>
            <div className="flex flex-col  my-5">
                <div className="flex">
                    <h1 className="heading1">quick links</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h1 className="heading1">recent highlights</h1>
                    <Link href="/news" className="hover:underline text-right">
                        view all →
                    </Link>
                </div>
            </div>
            <div>
                <NewsLoad news={news} />
            </div>
        </div>
    );
}
