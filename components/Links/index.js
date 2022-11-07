import React from "react";
// import { NavLink } from "react-router-dom";
import { useRouter } from "next/router";

export const Links = ({ isOnMobile = false, setMobNav }) => {
  const router = useRouter();
  const navLinkTitle = [
    {
      name: "Home",
      title: "About Ishwar Patil",
      link: "/",
    },
    {
      name: "About",
      title: "About Ishwar Patil",
      link: "/about",
    },
    {
      name: "Insurance",
      title: "Why should you have an Insurance",
      link: "/insurance",
    },
    {
      name: <>Mutual&nbsp;Funds</>,
      title: "Benefits of mutual funds",
      link: "/mutualfunds",
    },
    {
      name: "Contact-Us",
      style:
        "border-2 border-green-600 text-green-600 cursor-pointer p-0.5 hover:bg-green-600 hover:text-white transition-all ease-in-out duration-500 rounded",
    },
  ];

  const handleClickOnLink = (link) => {
    router.push(`${link}`);
    if (isOnMobile) {
      setMobNav(false);
    }
  };

  return (
    <div
      className={`flex items-center gap-4 text-l  font-medium p-3 ${
        isOnMobile
          ? "flex-col text-gray-200 gap-20"
          : "justify-between text-gray-600"
      }`}
    >
      {navLinkTitle.map(({ name, title, style, link }) => (
        <div
          title={title ? `${title}` : null}
          key={title}
          onClick={() => handleClickOnLink(link)}
          className={
            style
              ? `${style}`
              : `group flex flex-col justify-center items-center cursor-pointer `
          }
        >
          {name}
          {name !== "Contact-Us" && (
            <div className={`h-1 w-0 rounded translate-all ease-in duration-200 opacity-0 bg-green-600 group-hover:opacity-100 group-hover:w-3/5 ${router.pathname === link ? 'opacity-100 w-3/5':null}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};
