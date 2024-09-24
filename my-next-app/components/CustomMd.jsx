import React from "react";
import Link from "next/link";

export const h1_style = ({ children }) => (
    <h1 className="heading1 text-center py-2">{children}</h1>
);

export const h2_style = ({ children }) => (
    <h2 className="heading2 py-3">{children}</h2>
);

export const p_style = ({ children }) => (
    <p className="paragraph1 py-1">{children}</p>
);

export const link_style = ({ href, children }) => (
    <Link
        href={href}
        className="text-blue-400 underline hover:text-blue-500"
        target="_blank"
    >
        {children}
    </Link>
);

export const ul_style = ({ children }) => (
    <ul className="list-disc list-inside pl-2">{children}</ul>
);

export const li_style = ({ children }) => <li className="">{children}</li>;

export const ol_style = ({ children }) => (
    <ol className="list-decimal list-inside pl-2">{children}</ol>
);

export const table_style = ({ children }) => (
    <table className="table-auto w-full border-collapse border border-navback">
        {children}
    </table>
);

export const th_style = ({ children }) => (
    <th className="border border-gray-300 px-4 py-3 nav-back">{children}</th>
);

export const td_style = ({ children }) => (
    <td className="border border-gray-300 px-4 py-2">{children}</td>
);

export const code_style = ({ children }) => (
    <pre className="nav-back text-white p-4 rounded-md text-wrap my-4">
        <code>{children}</code>
    </pre>
);

export const img_style = ({ src, alt }) => (
    <img
        src={src}
        alt={alt}
        className="rounded-sm border-l-2 pl-2 my-5 w-[500px]"
    />
);
