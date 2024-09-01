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
            <h1 className="heading1">archive</h1>
            <p className="paragraph1">
                I am always looking for resources or anything that is useful.
                Here is a collection of things I have found, categorised into
                tags.
            </p>
            <div className="flex flex-col gap-2 border-y-[1.5px] border-y-gray-600 py-4 mt-5">
                <div className="flex gap-5 justify-end">
                    <label htmlFor="filter">Filter by:</label>
                    <select
                        name="filter"
                        id="filter"
                        className="bg-transparent px-5"
                    >
                        <option value="recent" selected>
                            Recent
                        </option>
                        <option value="recent" selected>
                            Oldest
                        </option>
                        <option value="recent" selected>
                            Alphabetical
                        </option>
                    </select>
                </div>
                {/* toggle tags */}
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
