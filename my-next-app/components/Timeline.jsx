import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllTimeline } from "../utility/load_timeline";
import TimelineLoad from "./reusable/TimelineLoad";

export default async function Timeline() {
    const timeline = getAllTimeline();

    timeline.sort((a, b) => {
        if (a.year_start === b.year_start) {
            return a.year_end > b.year_end ? -1 : 1;
        } else {
            return a.year_start > b.year_start ? -1 : 1;
        }
    });

    return (
        <div>
            <TimelineLoad timeline={timeline} />
        </div>
    );
}
