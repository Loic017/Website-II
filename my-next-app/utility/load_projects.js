import fs from "fs";
import path from "path";

const projectsFilePath = path.join(process.cwd(), "./jsons/projects.json");
// console.log("projects file path:", projectsFilePath);

export function getAllProjects() {
    // console.log("getAllProjects function called");
    try {
        const fileContents = fs.readFileSync(projectsFilePath, "utf8");
        // console.log("File contents:", fileContents);
        const projects = JSON.parse(fileContents);
        return projects;
    } catch (error) {
        // console.error("Error reading projects.json:", error);
        return [];
    }
}
