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
        <div className="relative flex items-center justify-between gap-2 text-xl text-black font-medium">

            {navLinkTitle.map(({ name, link, method }, index) => (
                <div key={index}  >
                    {name}
                </div>
            ))}


        </div>
    );
};
