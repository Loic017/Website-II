import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllArchive } from "../utility/load_archives";
import ArchiveLoad from "./reusable/ArchiveLoad";

export default async function ArchiveList({ category = "" }) {
    var archive = getAllArchive();

    if (category) {
        archive = archive.filter((item) => item.category === category);
    }

    return (
        <div>
            <ArchiveLoad archive={archive} />
        </div>
    );
}
