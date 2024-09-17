import React from "react";
import ProjectsLoad from "../../components/reusable/ProjectsLoad";
import { getAllProjects } from "../../utility/load_projects";

const Page = () => {
    var projects = getAllProjects();
    projects = projects.filter((item) => item.type === "research");

    return (
        <div>
            <h1 className="heading1">research work</h1>
            <p className="paragraph1">
                A collection of specifically research work.
            </p>
            <div className="mt-5">
                <ProjectsLoad projects={projects} />
            </div>
        </div>
    );
};

export default Page;
