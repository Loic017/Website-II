import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllWritings } from "../utility/load_writings";
import WritingsLoad from "./reusable/WritingsLoad";

export default async function ArchiveList() {
    var writings = getAllWritings();

    return (
        <div>
            <WritingsLoad writings={writings} />
        </div>
    );
}
