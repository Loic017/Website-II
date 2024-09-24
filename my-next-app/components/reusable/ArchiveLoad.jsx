import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArchiveLoad({ archive = [] }) {
    return (
        <div className="flex flex-col gap-5">
            {archive.map((item, index) => (
                <Link
                    href={`/archive/${item.category}/${item.id}`}
                    key={index}
                    className="category-box hover-scale flex justify-between items-center"
                >
                    <div className="pr-4">
                        <h2 className="heading2">{item.title}</h2>
                        <p className="paragraph1-nojustify">{item.brief}</p>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <div className="relative h-[100px] w-[100px]">
                            <Image
                                src={`/images/${item.image}`}
                                alt={item.title}
                                className="rounded-sm object-cover"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <span className="">
                            <b>&rarr;</b>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
