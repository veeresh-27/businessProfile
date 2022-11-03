import React from "react";
// import { NavLink } from "react-router-dom";

export const Link = () => {

    const navLinkTitle = [
        {
            name: "About",
            title:'About Ishwar Patil'
        },
        {
            name: "Insurance",
            title: 'Why should you have an Insurance'
        },
        {
            name: "Mutual Funds",
            title:'Benifits of mutual funds'
        },
        {
            name: "Contact-Us",
            style: 'border-2 border-green-600 cursor-pointer p-1 hover:bg-green-600 hover:text-white transition-all ease-in-out duration-500',
        },

    ];

    return (

        <div className="relative flex items-center justify-between gap-2 text-l text-gray-700 font-medium">

            {navLinkTitle.map(({ name,title,style }, index) => (
                <div title={title?`${title}`:null} key={index}  className={style?`${style}`:`cursor-pointer`}>
                    {name}
                </div>
            ))}
        </div>
    );
};
