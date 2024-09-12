import React from "react";
import PublicationsLoad from "../../components/reusable/PublicationsLoad";
import { getAllPublications } from "../../utility/load_publications";

const Page = () => {
    const publications = getAllPublications();
    return (
        <div>
            <h1 className="heading1">publications</h1>
            <p className="paragraph1">
                This page will be updated with any new publications.
            </p>
            <div className="mt-5">
                <PublicationsLoad publications={publications} />
            </div>
        </div>
    );
};

export default Page;
