"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Filepath() {
    const pathname = usePathname();
    var path = pathname.split("/");
    var printpath = "";

    if (pathname === "/") {
        printpath = "/home";
    } else {
        printpath = pathname;
    }

    // print the path variable
    console.log(printpath);

    return (
        <div>
            <p className="opacity-60">{printpath}</p>
        </div>
    );
}
