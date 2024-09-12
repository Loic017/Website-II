import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TimelineLoad({ timeline = [] }) {
    return (
        <div className="flex flex-col my-5">
            {timeline.map((item, index) => (
                <div key={index}>
                    {index === 0 && (
                        <div>
                            <div className="border-[4px] border-gray-500 w-6 h-1 mx-auto rounded-full"></div>
                            <div className="bg-gray-500 w-1 h-6 mx-auto"></div>
                        </div>
                    )}
                    <div className="flex flex-col nav-back p-5 rounded-md hover-scale">
                        <p className="small-caps min-[700px]:pb-1 min-[700px]:mb-2">
                            <span className="italic border-r-2 border-white border-opacity-50 mr-2 pr-2 ">
                                <b>
                                    {item.year_start} - {item.year_end}
                                </b>
                            </span>
                            <span className="">
                                {item.subtitle}
                                <span className="max-[700px]:hidden pl-2">
                                    @ {item.title}
                                </span>
                            </span>
                        </p>
                        <p className="mb-2 pb-1 small-caps min-[700px]:hidden">
                            @ {item.title}
                        </p>
                        <p className="news-paragraph flex gap-3">
                            <span className="flex-shrink-0">
                                {item.image.length > 0 && (
                                    <Image
                                        src={`/images/${item.image}`}
                                        alt={item.title}
                                        width={75}
                                        height={75}
                                        className="rounded-md border-2 border-black border-opacity-40s self-center"
                                    />
                                )}
                            </span>
                            {item.text}
                        </p>
                    </div>

                    {index !== timeline.length - 1 && (
                        <div className="bg-gray-500 w-1 h-7 mx-auto"></div>
                    )}
                    {index === timeline.length - 1 && (
                        <div>
                            <div className="bg-gray-500 w-1 h-6 mx-auto"></div>
                            <div className="border-[4px] border-gray-500 w-6 h-1 mx-auto rounded-full"></div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
