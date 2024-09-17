import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsLoad({ projects = [] }) {
    return (
        <div className="flex flex-col gap-5">
            {projects.map((item, index) => (
                <Link
                    href={`/research/${item.id}`}
                    key={index}
                    className="category-box hover-scale flex justify-between items-center"
                >
                    <p className="small-caps text-red-200 text-lg border-b-2 border-white border-opacity-20 pb-2">
                        <b>{item.name}</b>
                    </p>

                    <p className="">
                        <span className="text-red-200 small-caps">
                            {item.stack.map((tech, index) => (
                                <span key={index} className="text-smd">
                                    {tech}{" "}
                                </span>
                            ))}
                        </span>
                    </p>
                    <p className="">{item.brief}</p>
                    <Image
                        src={`/images/${item.image}`}
                        alt={item.name}
                        className="rounded-sm"
                        width={75}
                        height={75}
                    />
                </Link>
            ))}
        </div>
    );
}
