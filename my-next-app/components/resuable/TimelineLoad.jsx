import React from "react";
import Link from "next/link";

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
                    <div className="flex flex-col text-justify nav-back p-5 rounded-md hover-scale">
                        <p className="news-paragraph small-caps pb-2">
                            <span className="italic border-r-2 border-white border-opacity-50 mr-2 pr-2">
                                <b>
                                    {item.year_start} - {item.year_end}
                                </b>
                            </span>
                            <span className="border-r-2 border-white border-opacity-50 mr-2 pr-2">
                                {item.title}
                            </span>
                            {item.subtitle}
                        </p>
                        <p className="news-paragraph">{item.text}</p>
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
