"use client";

import React from "react";
import { useState } from "react";

const Archive = () => {
    const [tagsOpen, setTagsOpen] = useState(false);

    const toggleTags = () => {
        setTagsOpen(!tagsOpen);
    };
    return (
        <div className="">
            <div className="flex flex-col gap-2 border-y-[1.5px] border-y-gray-600 py-4 mt-5">
                <div className="flex gap-5 justify-end">
                    <label htmlFor="filter">Filter by:</label>
                    <select name="filter" id="filter" className="custom-select">
                        <option value="recent" selected>
                            Recent
                        </option>
                        <option value="oldest">Oldest</option>
                        <option value="alphabetical">Alphabetical</option>
                    </select>
                </div>
                <div className="text-right">
                    <button onClick={toggleTags}>
                        {tagsOpen ? "Hide Tags -" : "Show Tags +"}
                    </button>
                    {tagsOpen && (
                        <form className="flex gap-5 justify-around my-2">
                            <label>
                                <input
                                    className="checkbox1"
                                    type="checkbox"
                                    name="tag"
                                    value="ml"
                                />
                                Machine Learning
                            </label>
                            <label>
                                <input
                                    className="checkbox1"
                                    type="checkbox"
                                    name="tag"
                                    value="math"
                                />
                                Math
                            </label>
                            <label>
                                <input
                                    className="checkbox1"
                                    type="checkbox"
                                    name="tag"
                                    value="prog"
                                />
                                General-Programming
                            </label>
                            <label>
                                <input
                                    className="checkbox1"
                                    type="checkbox"
                                    name="tag"
                                    value="other"
                                />
                                Other
                            </label>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Archive;
