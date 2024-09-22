import React from "react";
import Link from "next/link";
import ViewMoreBtn from "../ViewMoreBtn";

export default function PublicationsLoad({ publications = [] }) {
    return (
        <div className="flex flex-col gap-5">
            {publications.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col px-3 py-3 rounded-md gap-2 nav-back border-2 border-white border-opacity-20"
                >
                    <h2 className="small-caps text-lg border-b-2 border-white border-opacity-20 pb-2">
                        <b>{item.title}</b>
                    </h2>

                    <p className="">
                        <span className="small-caps">
                            <b>{item.venue.name}</b>
                        </span>{" "}
                        - {item.venue.full_name}
                    </p>
                    <p className="flex gap-2">
                        {item.authors.map((author, index) => (
                            <span key={index} className="text-smd">
                                {author}
                                {item.authors.length - 1 !== index && (
                                    <span className="">,</span>
                                )}
                            </span>
                        ))}
                    </p>
                    <ViewMoreBtn
                        to={item.link}
                        text="View →"
                        className=""
                        external={true}
                    />
                </div>
            ))}
        </div>
    );
}
