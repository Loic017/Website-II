import fs from "fs";
import path from "path";

const writingFilePath = path.join(process.cwd(), "./jsons/writings.json");
// console.log("writing file path:", writingFilePath);

export function getAllWritings() {
    // console.log("getAllWritings function called");
    try {
        const fileContents = fs.readFileSync(writingFilePath, "utf8");
        // console.log("File contents:", fileContents);
        const writing = JSON.parse(fileContents);
        return writing;
    } catch (error) {
        // console.error("Error reading writing.json:", error);
        return [];
    }
}
