import React from "react";
import Link from "next/link";
import ArchiveList from "../../../components/ArchiveList";

const Page = ({ params }) => {
    const category = params.category;

    return (
        <div>
            <Link href="/archive" className="text-lg hover:underline">
                ← Back
            </Link>
            <h1 className="heading1">archive: {category}</h1>
            <p className="paragraph1">Select one to view more and see links.</p>
            <ArchiveList category={category} />
        </div>
    );
};

export default Page;
