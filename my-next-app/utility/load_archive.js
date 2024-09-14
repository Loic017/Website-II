import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "markdown/archive");

export function getAllArticleIds() {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getArticleData(id) {
    const fullPath = path.join(articlesDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
        id,
        contentMarkdown: matterResult.content,
        ...matterResult.data,
    };
}
