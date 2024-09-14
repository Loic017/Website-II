import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArchiveLoad({ archive = [] }) {
    return (
        <div className="flex flex-col gap-5">
            {archive.map((item, index) => (
                <Link
                    href="/"
                    key={index}
                    className="category-box hover-scale flex justify-between items-center"
                >
                    <div>
                        <h2 className="heading2">{item.title}</h2>
                        <p className="paragraph1">{item.brief}</p>
                    </div>
                    <div>
                        <Image
                            src={`/images/${item.image}`}
                            alt={item.title}
                            className="rounded-sm"
                            width={75}
                            height={75}
                        />
                    </div>
                </Link>
            ))}
        </div>
    );
}
