import fs from "fs";
import path from "path";

const awardsFilePath = path.join(process.cwd(), "./jsons/awards.json");
// console.log("awards file path:", awardsFilePath);

export function getAllAwards() {
    // console.log("getAllAwards function called");
    try {
        const fileContents = fs.readFileSync(awardsFilePath, "utf8");
        // console.log("File contents:", fileContents);
        const awards = JSON.parse(fileContents);
        return awards;
    } catch (error) {
        // console.error("Error reading awards.json:", error);
        return [];
    }
}
