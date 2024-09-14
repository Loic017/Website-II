import fs from "fs";
import path from "path";

const archiveFilePath = path.join(process.cwd(), "./jsons/archive.json");
// console.log("archive file path:", archiveFilePath);

export function getAllArchive() {
    // console.log("getAllarchive function called");
    try {
        const fileContents = fs.readFileSync(archiveFilePath, "utf8");
        // console.log("File contents:", fileContents);
        const archive = JSON.parse(fileContents);
        return archive;
    } catch (error) {
        // console.error("Error reading archive.json:", error);
        return [];
    }
}
