import React from "react";
import Link from "next/link";

export default function awardsLoad({ awards = [] }) {
    return (
        <div className="flex flex-col gap-5">
            {awards.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col text-justify border-2 border-white border-opacity-10 px-3 py-3 rounded-md hover-scale"
                >
                    <p className="news-paragraph small-caps pb-2">
                        <span className="mr-2 italic border-r-2 border-white border-opacity-50 pr-2">
                            <b>{item.date}</b>
                        </span>
                        {item.name}
                    </p>
                    <p className="news-paragraph flex flex-col">
                        Awarded by ~ {item.by}
                    </p>
                </div>
            ))}
        </div>
    );
}
