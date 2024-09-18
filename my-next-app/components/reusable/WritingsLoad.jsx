import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WritingsLoad({ writings = [] }) {
    return (
        <div className="flex flex-col gap-5">
            {writings.map((item, index) => (
                <Link
                    href={`/writings/${item.id}`}
                    key={index}
                    className="category-box hover-scale flex items-start gap-3"
                >
                    <div className="flex flex-col gap-2">
                        <Image
                            src={`/images/${item.image}`}
                            alt={item.title}
                            className="rounded-md"
                            width={250}
                            height={250}
                        />
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-slate-400 p-1 rounded-md px-2 text-center"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col gap-1 w-full ">
                        <div className="">
                            <h2 className="heading2-nomy flex flex-col">
                                <span className="text-sm">{item.date}</span>
                                {item.title}
                            </h2>
                            <p className="paragraph1-nomy">{item.brief}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
