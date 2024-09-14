import {
    getArticleData,
    getAllArticleIds,
} from "../../../../utility/load_archive";
import ReactMarkdown from "react-markdown";
import { h1_style, h2_style, p_style } from "../../../../components/CustomMd";

import { getAllArchive } from "../../../../utility/load_archives";
import ArchiveLoad from "../../../../components/reusable/ArchiveLoad";

import Link from "next/link";

export default async function Page({ params }) {
    const articleData = await getArticleData(params.id);
    const news = getAllArchive();
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
                <Link href="/news" className="text-lg hover:underline">
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
                    }}
                >
                    {articleData.contentMarkdown}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const articles = getAllArticleIds();
    return articles.map(({ params }) => params);
}
