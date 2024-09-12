import React from "react";
import Link from "next/link";

export default function PublicationsLoad({ publications = [] }) {
    return (
        <div className="flex flex-col gap-5">
            {publications.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col px-3 py-3 rounded-md gap-2 nav-back"
                >
                    <p className="small-caps text-red-200 text-lg border-b-2 border-white border-opacity-20 pb-2">
                        <b>{item.title}</b>
                    </p>

                    <p className="">
                        <span className="text-red-200 small-caps">
                            <b>{item.venue.name}</b>
                        </span>{" "}
                        - {item.venue.full_name}
                    </p>
                    <p className="flex gap-2">
                        {item.authors.map((author, index) => (
                            <span key={index} className="text-smd">
                                {author}
                            </span>
                        ))}
                    </p>
                    <Link
                        href={item.link}
                        className="hover:underline self-end"
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        <b>View →</b>
                    </Link>
                </div>
            ))}
        </div>
    );
}
