import React, { useState } from "react";
// import { IconSearch } from "../../../assets/icons";
// import { motion } from "framer-motion";
export const SearchBox = () => {
    const [showSearch, setShowSearch] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        setShowSearch(!showSearch);
    };

    return (
        <div className="flex w-full items-baseline h-full rounded">
            <form className="flex">
                {showSearch && (
                    <input
                        // initial="hidden"
                        // whileInView={"visible"}
                        // variants={{
                        //     visible: { opacity: 1, scale: 1, x: 0 },
                        //     hidden: { opacity: 0, scale: 0, x: -100 },
                        // }}
                        className="flex w-min bg-gray-100 p-2 text-sm  outline-none"
                        type="text"
                        placeholder="Search"
                    />
                )}
                <button
                    className="text-gray-700  bg-gray-100 hover:scale-110 hover:text-primary  pl-2 py-2"
                    onClick={handleSearch}
                >
                    {/*<IconSearch />*/}
                </button>
            </form>
        </div>
    );
};
