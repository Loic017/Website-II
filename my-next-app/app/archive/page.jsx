import React from "react";
import Archive from "../../components/Archive";

const Page = () => {
    return (
        <div>
            <h1 className="heading1">archive</h1>
            <p className="paragraph1">
                I am always looking for resources or anything that is useful.
                Here is a collection of things I have found, categorised into
                tags.
            </p>
            <Archive />
        </div>
    );
};

export default Page;
