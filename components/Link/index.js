import React from "react";
// import { NavLink } from "react-router-dom";

export const Link = () => {

    const navLinkTitle = [
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/Contact",
        },
        {
            name: "Signup",
            link: "/signup",
        },
    ];

    return (

        // <div className="relative flex items-center justify-between gap-2 text-xl text-black font-medium ">
<div className=" text-xl px-3 py-2  md:flex md:items-center z-[-1] md:z-auto md:static absolute  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 justify-between gap-2 font-medium cursor-pointer ">
            {navLinkTitle.map(({ name, link, method }, index) => (
                <div key={index}  >
                    {name}
                </div>
            ))}


        </div>
    );
};
