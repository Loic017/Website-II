// app/not-found.js
import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="">
            <h1 className="heading1">404</h1>
            <p className="text-lg mb-8">
                Oops... I have not written or implemented this article or page
                yet. Should be here soon.
            </p>
            <Link href="/" className="text-blue-500 hover:underline ">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
