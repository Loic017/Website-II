import Link from "next/link";

export default function HomePage() {
    return (
        <div className="">
            <div className="flex flex-col">
                <h1 className="heading1"># welcome</h1>
                <p>Hello, I'm Loic!</p>
            </div>
            <div className="flex flex-col  my-5">
                <div className="flex">
                    <h1 className="heading1 flex"># quick links</h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <h1 className="heading1 flex"># highlights</h1>
                </div>
                <Link href="/home/news" className="hover:underline text-right">
                    view all →
                </Link>
            </div>
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
                    className="italic"
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
                    className="italic"
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
                    className="italic"
                >
                    &apos;Epileptic seizure detection with Tiny Machine
                    Learning&apos;
                </a>{" "}
                has been accepted to the{" "}
                <a
                    href="https://www.mobiuk.org/2024/programme.html"
                    className="italic"
                >
                    MobiUK 2024 Symposium
                </a>
                .
            </>
        ),
    },
];
