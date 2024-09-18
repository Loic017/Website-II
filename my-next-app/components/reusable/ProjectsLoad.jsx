import React from "react";
import Link from "next/link";
import Image from "next/image";

import ViewMoreBtn from "../ViewMoreBtn";

export default function ProjectsLoad({ projects = [] }) {
    return (
        <div className="flex flex-col gap-5">
            {projects.map((item, index) => (
                <div
                    // href={`/research/${item.id}`}
                    key={index}
                    className="category-box hover-scale gap-4 items-start"
                >
                    <div className="w-full h-full flex flex-col gap-1 items-center">
                        <Image
                            src={`/images/${item.image}`}
                            alt={item.name}
                            className="rounded-md object-cover w-full h-40"
                            width={50}
                            height={50}
                        />
                        <p className="">
                            <span className="text-red-200 small-caps">
                                {item.stack.map((tech, index) => (
                                    <span key={index} className="text-sm">
                                        {tech}
                                        {index < item.stack.length - 1
                                            ? ", "
                                            : " "}{" "}
                                    </span>
                                ))}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="heading2-nomy text-md">
                            <b>{item.name}</b>
                        </h2>
                        <div>
                            <p className="">{item.brief}</p>
                        </div>
                        <div className="self-center mt-2 flex gap-2">
                            <ViewMoreBtn
                                to={`/projects/${item.id}`}
                                text="Read More"
                            />
                            <ViewMoreBtn
                                to={`/projects/${item.id}`}
                                text="Read More"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
