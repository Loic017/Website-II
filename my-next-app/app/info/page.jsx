import React from "react";
import Link from "next/link";
import Image from "next/image";
import frontpage from "../frontpage.png";
import Awards from "../../components/Awards";

const Page = () => {
    return (
        <div className="flex flex-col">
            <h1 className="heading1">about me</h1>
            <p className="paragraph1">
                <b>Hello there, I&apos;m Loic.</b> I am a recent computer
                science graduate. While computer science is an active hobby of
                mine, my personal interests also include music, sport, and
                history.
            </p>
            <p className="paragraph1">
                I have experience working with different mediums, from web
                applications to software development. My <b>primary interest</b>{" "}
                is in machine learning, where I aspire to become a researcher. I
                aim to make impactful contributions that benefit the world and
                improve people&apos;s lives.
            </p>
            <div className="border-l-2 pl-2 my-5 min-[700px]:w-[300px]">
                <Image src={frontpage} alt="Banner" className="rounded-md" />
            </div>
            <p className="paragraph1">
                Currently, I am self-studying maths and machine learning. I am
                pursuing an MPhil and aim to start a PhD in the future.
            </p>
            <h1 className="heading1">technologies</h1>
            <p className="paragraph1">
                While I am continuously learning new technologies, the following
                list includes some of the <i>key</i> technologies I have worked
                with.
            </p>
            <ul className="flex flex-col min-[700px]:flex-row min-[700px]:gap-5 my-2">
                <li>
                    <b>Languages:</b>
                </li>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <ul className="flex flex-col min-[700px]:flex-row min-[700px]:gap-5 my-2">
                <li>
                    <b>Frameworks and Libraries:</b>
                </li>
                <li>PyTorch</li>
                <li>Django</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
            </ul>
            <h1 className="heading1">awards</h1>
            <ul className="flex flex-col min-[700px]:flex-row min-[700px]:gap-5 my-2">
                <Awards />
            </ul>
        </div>
    );
};

export default Page;
