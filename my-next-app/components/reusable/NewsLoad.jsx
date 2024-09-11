import React from "react";
import Link from "next/link";

export default function NewsLoad({ news = [] }) {
    return (
        <div className="flex flex-col  gap-2 items-center">
            {news.map((item, index) => (
                <div key={index} className="flex flex-col text-justify">
                    <p className="paragraph1 pb-2">
                        <span className="mr-1 italic opacity-60 small-caps">
                            <b>{item.date} ~</b>
                        </span>

                        {item.text}
                        <Link
                            className="ml-1 underline italic"
                            href="/news/[id]"
                            as={`/news/${item.id}`}
                        >
                            Read More
                        </Link>
                    </p>
                </div>
            ))}
        </div>
    );
}
