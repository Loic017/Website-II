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
                    <div>
                        <h2 className="heading2">{item.title}</h2>
                        <p className="paragraph1">{item.brief}</p>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <Image
                            src={`/images/${item.image}`}
                            alt={item.title}
                            className="rounded-sm"
                            width={100}
                            height={100}
                        />
                        <span ClassName="">
                            <b>&rarr;</b>
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
