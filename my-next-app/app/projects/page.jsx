import React from "react";
import ProjectsLoad from "../../components/reusable/ProjectsLoad";
import { getAllProjects } from "../../utility/load_projects";

const Page = () => {
    var projects = getAllProjects();

    return (
        <div>
            <h1 className="heading1">projects</h1>
            <p className="paragraph1">
                A collection of projects I have worked on for various purposes
                including learning, research, and fun.
            </p>
            <div className="mt-5">
                <ProjectsLoad projects={projects} />
            </div>
        </div>
    );
};

export default Page;
