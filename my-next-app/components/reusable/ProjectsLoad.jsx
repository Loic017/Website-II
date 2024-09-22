"use client";
import { useState } from "react";
import Image from "next/image";
import ViewMoreBtn from "../ViewMoreBtn";

export default function ProjectsLoad({ projects = [] }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="flex flex-col gap-5">
            {projects.map((item, index) => {
                const isHighlighted = item.highlighted;
                const brief = isHighlighted
                    ? item.brief
                    : item.brief.split(" ").slice(0, 10).join(" ") + "...";
                const imageHeight = isHighlighted ? "h-40" : "h-full";
                const imageWidth = isHighlighted ? "w-full" : "w-20";
                const containerClass = isHighlighted
                    ? "flex-col items-center gap-2"
                    : "flex-row items-start gap-3";

                return (
                    <div
                        key={index}
                        className="category-box gap-1 items-start flex flex-col"
                    >
                        <div
                            className={`w-full h-full flex ${containerClass} items-center`}
                        >
                            <div
                                className={`${imageWidth} ${imageHeight} flex-shrink-0`}
                            >
                                <Image
                                    src={`/images/${item.image}`}
                                    alt={item.name}
                                    className="rounded-md object-cover w-full h-full"
                                    width={1000}
                                    height={500}
                                />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex flex-col gap-1">
                                    <h2 className="heading2-nomy text-md">
                                        <b>{item.name}</b>
                                    </h2>
                                </div>
                                {isHighlighted && (
                                    <p className="flex items-center text-center rounded-md">
                                        <span className="flex gap-2 text-sm">
                                            {item.stack.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-[0.05rem] rounded-lg bg-gray-700 bg-opacity-80"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            {!isHighlighted && (
                                <p className="flex items-center text-center rounded-md pt-2">
                                    <span className="flex gap-2 text-sm">
                                        {item.stack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-[0.05rem] rounded-lg bg-gray-700 bg-opacity-80"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                            )}
                            <p className="py-3">{brief}</p>
                            <div className="self-center flex flex-col gap-2 w-full border-t-2 border-white border-opacity-20 pt-3">
                                {item.links.map((link, index) =>
                                    link.name === "Read More" ? (
                                        <ViewMoreBtn
                                            key={index}
                                            to={`/projects/${item.id}`}
                                            text={link.name}
                                            className="w-full"
                                        />
                                    ) : null
                                )}
                                {isHighlighted && (
                                    <div className="flex flex-wrap gap-2 w-full">
                                        {item.links
                                            .filter(
                                                (link) =>
                                                    link.name !== "Read More"
                                            )
                                            .map((link, index) => (
                                                <ViewMoreBtn
                                                    key={index}
                                                    to={link.url}
                                                    text={link.name}
                                                    className=""
                                                    external={true}
                                                />
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
