import {
    getArticleData,
    getAllArticleIds,
} from "../../../utility/load_ind_proj";
import ReactMarkdown from "react-markdown";
import {
    h1_style,
    h2_style,
    p_style,
    link_style,
    ul_style,
    li_style,
    table_style,
    th_style,
    td_style,
    code_style,
    ol_style,
} from "../../../components/CustomMd";
import remarkGfm from "remark-gfm";

import { getAllProjects } from "../../../utility/load_projects";
import ProjectsLoad from "../../../components/reusable/ProjectsLoad";
import Link from "next/link";

export default async function Page({ params }) {
    const articleData = await getArticleData(params.id);
    const news = getAllProjects();
    var matchNews;

    const articleId = parseInt(params.id, 10);
    for (let i = 0; i < news.length; i++) {
        if (news[i].id === articleId) {
            matchNews = news[i];
            break;
        }
    }

    const wordsPerMinute = 200; // Average reading speed
    const words = articleData.contentMarkdown.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return (
        <div className="">
            <div className="flex flex-row items-center justify-between">
                <Link href="/projects" className="text-lg hover:underline">
                    ← Back
                </Link>
                <p className=".paragraph1-nomy">{matchNews.date}</p>
            </div>
            <div className="flex flex-col items-center justify-between my-2 py-2 border-y-2 border-white border-opacity-10">
                <p className=".paragraph1-nomy">{matchNews.title}</p>
                <p className=".paragraph1-nomy">Read Time: {minutes}m</p>
            </div>

            <div>
                <ReactMarkdown
                    components={{
                        h1: h1_style,
                        h2: h2_style,
                        p: p_style,
                        a: link_style,
                        ul: ul_style,
                        li: li_style,
                        table: table_style,
                        th: th_style,
                        td: td_style,
                        code: code_style,
                        ol: ol_style,
                    }}
                    remarkPlugins={[remarkGfm]}
                >
                    {articleData.contentMarkdown}
                </ReactMarkdown>
                <div className="flex justify-center items-center">
                    <p className="paragraph1 text-center border-t-2 border-white border-opacity-20 px-20 pt-4">
                        End of Article
                    </p>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const articles = getAllArticleIds();
    return articles.map(({ params }) => params);
}
