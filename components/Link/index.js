import React from "react";
// import { NavLink } from "react-router-dom";

export const Link = ({isOnMobile=false,setMobNav=null}) => {

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
            style: 'border-2 border-green-600 cursor-pointer p-0.5 hover:bg-green-600 hover:text-white transition-all ease-in-out duration-500 rounded',
        },

    ];

    return (

        <div className={`relative flex items-center justify-between gap-2 text-l text-gray-700 font-medium p-3 ${isOnMobile? 'flex-col':null}`}>

            {navLinkTitle.map(({ name,title,style }, index) => (
                <div title={title?`${title}`:null} key={index} onClick={setMobNav? ()=> setMobNav(false):null}  className={style?`${style}`:`cursor-pointer`}>
                    {name}
                </div>
            ))}
        </div>
    );
};
