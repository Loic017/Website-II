import Link from "next/link";
import Image from "next/image";
import banner from "../app/banner.png";

import { getAllAwards } from "../utility/load_awards";
import AwardsLoad from "./reusable/AwardsLoad";

export default async function Awards() {
    const awards = getAllAwards();

    return (
        <div>
            <AwardsLoad awards={awards} />
        </div>
    );
}
