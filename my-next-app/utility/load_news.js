import fs from "fs";
import path from "path";

const newsFilePath = path.join(process.cwd(), "./jsons/news.json");
// console.log("News file path:", newsFilePath);

export function getAllNews() {
    // console.log("getAllNews function called");
    try {
        const fileContents = fs.readFileSync(newsFilePath, "utf8");
        // console.log("File contents:", fileContents);
        const news = JSON.parse(fileContents);
        return news;
    } catch (error) {
        // console.error("Error reading news.json:", error);
        return [];
    }
}
