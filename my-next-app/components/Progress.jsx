"use client";
import { useEffect, useState } from "react";

const Progress = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollWidth(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed w-52 h-1 bg-gray-200">
            <div
                className="h-full bg-blue-500"
                style={{ width: `${scrollWidth}%` }}
            ></div>
        </div>
    );
};

export default Progress;
