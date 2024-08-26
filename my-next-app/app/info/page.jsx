import React from "react";
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <h1 className="heading1"># about</h1>
            <p className="paragraph1">
                <b>Hello there, I'm Loic.</b> I am a recent computer science
                graduate. While computer science is an active hobby of mine, my
                personal interests also include music, sport, and technology.
            </p>
            <p className="paragraph1">
                I have experience working with different mediums, from web
                applications to software development. My <b>primary interest</b>{" "}
                is in machine learning, where I aspire to become a researcher. I
                aim to make impactful contributions that benefit the world and
                improve people's lives.
            </p>
            <p className="paragraph1">
                Currently, I am self-studying maths and machine learning. I am
                pursuing an MPhil and aim to start a PhD in the future.
            </p>
            <h1 className="heading1"># technologies</h1>
            <p className="paragraph1">
                While I am continuously learning new technologies, the following
                list includes some of the <i>key</i> technologies I have worked
                with.
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
                        <b>Frameworks and Libararies:</b>
                    </li>
                    <li>PyTorch</li>
                    <li>Django</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind</li>
                </ul>
            </p>
            <h1 className="heading1"># links</h1>
            <p className="paragraph1">
                • Contact me via email at "reachloic@gmail.com" or messaged on
                LinkedIn.
            </p>
            <p className="paragraph1">
                • Check out some of my work and projects on my GitHub.
            </p>
            <ul className="flex gap-5 justify-around">
                <li>
                    <Link href="/info">GitHub →</Link>
                </li>
                <li>
                    <Link href="/info">LinkedIn →</Link>
                </li>
                <li>
                    <Link href="/info">Email →</Link>
                </li>
            </ul>
        </div>
    );
};

export default Page;
