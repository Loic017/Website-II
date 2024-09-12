import fs from "fs";
import path from "path";

const timelineFilePath = path.join(process.cwd(), "./jsons/timeline.json");
// console.log("News file path:", newsFilePath);

export function getAllTimeline() {
    // console.log("getAllNews function called");
    try {
        const fileContents = fs.readFileSync(timelineFilePath, "utf8");
        // console.log("File contents:", fileContents);
        const news = JSON.parse(fileContents);
        return news;
    } catch (error) {
        // console.error("Error reading news.json:", error);
        return [];
    }
}
