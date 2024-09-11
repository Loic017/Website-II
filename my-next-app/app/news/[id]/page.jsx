import {
    getArticleData,
    getAllArticleIds,
} from "../../../utility/load_articles";
import ReactMarkdown from "react-markdown";
import { h1_style, h2_style, p_style } from "../../../components/CustomMd";

export default async function Page({ params }) {
    const articleData = await getArticleData(params.id);

    return (
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
    );
}

export async function generateStaticParams() {
    const articles = getAllArticleIds();
    return articles.map(({ params }) => params);
}
