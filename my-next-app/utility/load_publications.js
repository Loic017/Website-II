import fs from "fs";
import path from "path";

const publicationsFilePath = path.join(
    process.cwd(),
    "./jsons/publications.json"
);
// console.log("publications file path:", publicationsFilePath);

export function getAllPublications() {
    // console.log("getAllPublications function called");
    try {
        const fileContents = fs.readFileSync(publicationsFilePath, "utf8");
        // console.log("File contents:", fileContents);
        const publications = JSON.parse(fileContents);
        return publications;
    } catch (error) {
        // console.error("Error reading publications.json:", error);
        return [];
    }
}
