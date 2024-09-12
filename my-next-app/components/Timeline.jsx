import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllTimeline } from "../utility/load_timeline";
import TimelineLoad from "./reusable/TimelineLoad";

export default async function Timeline() {
    const timeline = getAllTimeline();

    timeline.sort((a, b) => {
        return b.year_start - a.year_start;
    });

    return (
        <div>
            <TimelineLoad timeline={timeline} />
        </div>
    );
}
