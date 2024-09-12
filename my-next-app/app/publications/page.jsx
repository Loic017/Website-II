import React from "react";
import PublicationsLoad from "../../components/reusable/PublicationsLoad";
import { getAllPublications } from "../../utility/load_publications";

const Page = () => {
    const publications = getAllPublications();
    console.log(publications);

    return (
        <div>
            <h1 className="heading1">publications</h1>
            <div className="mt-5">
                <PublicationsLoad publications={publications} />
            </div>
        </div>
    );
};

export default Page;
