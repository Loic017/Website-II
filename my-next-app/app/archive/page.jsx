import React from "react";
import ArchiveFilter from "../../components/ArchiveFilter";

const Page = () => {
    return (
        <div>
            <h1 className="heading1">archive</h1>
            <p className="paragraph1">
                I am always looking for resources (or anything) that is useful
                for topics I am interested in. Here is a collection of things I
                have found/used/read, categorised into tags and featuring some
                comments.
            </p>
            <p className="paragraph1">
                I will organise this better in the future.
            </p>
            <ArchiveFilter />
        </div>
    );
};

export default Page;
