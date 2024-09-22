import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArchiveFilter() {
    return (
        <div className="">
            <div className="flex flex-col gap-2 border-t-2 border-white border-opacity-10 py-4 mt-5">
                <p className="paragraph1">Select Category</p>
                <div className="flex flex-col items-center gap-2">
                    <Link
                        href={`/archive/machine-learning`}
                        className="category-box hover-scale flex justify-between items-center"
                    >
                        <span>Machine Learning</span>{" "}
                        <span className="">
                            <b>&rarr;</b>
                        </span>
                    </Link>
                    <Link
                        href={`/archive/math`}
                        className="category-box hover-scale flex justify-between items-center"
                    >
                        <span>Math</span>{" "}
                        <span className="">
                            <b>&rarr;</b>
                        </span>
                    </Link>
                    <Link
                        href={`/archive/general-programming`}
                        className="category-box hover-scale flex justify-between items-center"
                    >
                        <span>General Programming</span>{" "}
                        <span className="">
                            <b>&rarr;</b>
                        </span>
                    </Link>
                    <Link
                        href={`/archive/other`}
                        className="category-box hover-scale flex justify-between items-center"
                    >
                        <span>Other</span>{" "}
                        <span className="">
                            <b>&rarr;</b>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
