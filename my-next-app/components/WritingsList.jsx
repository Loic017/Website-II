import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllWritings } from "../utility/load_writings";
import WritingsLoad from "./reusable/WritingsLoad";

export default async function ArchiveList() {
    var writings = getAllWritings();

    return (
        <div>
            {writings.length === 0 && (
                <div className="nav-back p-5 rounded-md my-5">
                    <h2 className="heading2">No writings found.</h2>
                    <p className="paragraph1">Please check back later.</p>
                </div>
            )}
            {writings.length > 0 && <WritingsLoad writings={writings} />}
        </div>
    );
}
