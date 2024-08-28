import Link from "next/link";

export default function Highlights() {
    return (
        <div className="my-5">
            <h1 className="heading1"># highlights & news</h1>
            <p className="paragraph1">
                A collection of accomplishments, milestones and other notable
                moments.
            </p>
            <div className="flex flex-col items-center">
                {news.map((newsItem, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center my-2 text-justify"
                    >
                        <p>
                            <b className="paragraph1">{newsItem.date}</b> ~{" "}
                            {newsItem.text}
                        </p>
                        {/* <p className="paragraph1">{newsItem.text}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

const news = [
    {
        date: "July_2024",
        text: (
            <>
                I have been awarded the{" "}
                <b className="text-primary">
                    &quot;Best Final Year Project, BSc Computer Science and
                    Variants&quot;
                </b>{" "}
                prize from the School of Computer Science and Informatics at
                Cardiff University for my study on{" "}
                <a
                    href="https://blog.lorentel.com/tinyml-seizure-detection"
                    className="underline italic"
                >
                    TinyML for Epileptic Seizures.
                </a>
            </>
        ),
    },
    {
        date: "July_2024",
        text: (
            <>
                I have graduated from Cardiff University with{" "}
                <b className="text-primary">First Class Honours</b> in BSc
                Computer Science.
            </>
        ),
    },
    {
        date: "June_2024",
        text: (
            <>
                I have won <c className="text-primary">first prize</c> in the{" "}
                <a
                    href="https://www.agilecps.org/activities/2024-cardiff-vnu-competition"
                    className="underline italic"
                >
                    Global Wales&apos; Cardiff-VNU student poster competition
                </a>{" "}
                on &quot;AI, Smart Healthcare, and IoT&quot; in 2024.
            </>
        ),
    },
    {
        date: "May_2024",
        text: (
            <>
                My extended abstract on{" "}
                <a
                    href="https://blog.lorentel.com/tinyml-seizure-detection"
                    className="underline italic"
                >
                    &apos;Epileptic seizure detection with Tiny Machine
                    Learning&apos;
                </a>{" "}
                has been accepted to the{" "}
                <a
                    href="https://www.mobiuk.org/2024/programme.html"
                    className="underline italic"
                >
                    MobiUK 2024 Symposium
                </a>
                .
            </>
        ),
    },
];
