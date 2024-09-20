import React from "react";
import Link from "next/link";

export default function NewsLoad({ news = [] }) {
    news.sort((a, b) => {
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

    return (
        <div className="flex flex-col gap-5 items-center my-2">
            {news.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col nav-back p-5 rounded-md hover-scale"
                >
                    <h2 className="small-caps pb-2">
                        <span className="mr-2 italic border-r-2 border-white border-opacity-50 pr-2">
                            {item.date}
                        </span>
                        <b>{item.title}</b>
                    </h2>
                    <p className="news-paragraph flex flex-col">
                        {item.text}
                        <span className="flex w-full justify-end">
                            {/* <hr className="w-full my-3 border-t-2 border-gray-300 border-opacity-50" /> */}
                            <Link
                                className="underline italic text-right"
                                href={`/news/${item.id}`}
                            >
                                Read More
                            </Link>
                        </span>
                    </p>
                </div>
            ))}
        </div>
    );
}
