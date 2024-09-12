import Link from "next/link";

import { getAllNews } from "../utility/load_news";
import NewsLoad from "./resuable/NewsLoad";

export default function Highlights() {
    const news = getAllNews();

    return (
        <div className="my-5">
            <h1 className="heading1">highlights & news</h1>
            <p className="paragraph1">
                A collection of accomplishments, milestones and other notable
                moments.
            </p>
            <div className="flex flex-col items-center">
                <div>
                    <NewsLoad news={news} />
                </div>
            </div>
        </div>
    );
}
