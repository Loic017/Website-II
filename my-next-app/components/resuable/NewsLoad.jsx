import React from "react";
import Link from "next/link";

export default function NewsLoad({ news = [] }) {
    return (
        <div className="flex flex-col gap-5 items-center my-5">
            {news.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col text-justify nav-back p-5 rounded-md hover-scale"
                >
                    <p className="news-paragraph small-caps pb-2">
                        <span className="mr-2 italic border-r-2 border-white border-opacity-50 pr-2">
                            <b>{item.date}</b>
                        </span>
                        {item.title}
                    </p>
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
