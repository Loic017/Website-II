import React from "react";
import Link from "next/link";
import WritingsList from "../../components/WritingsList";

const Page = ({ params }) => {
    return (
        <div>
            <h1 className="heading1">writings</h1>
            <p className="paragraph1">Notes or anything.</p>
            <WritingsList />
        </div>
    );
};

export default Page;
