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
      name: <>Home&nbsp;Loan</>,
      title: "Get home loan",
      link: "/homeloans",
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
      className={`flex items-center gap-6 text-[1.09rem]  font-medium py-3 ${
        isOnMobile ? "flex-col text-gray-200 gap-20" : "justify-between text-gray-600 "
      }`}>
      {navLinkTitle.map(({ name, title, style, link }) => (
        <div
          title={title ? `${title}` : null}
          key={title}
          onClick={() => handleClickOnLink(link)}
          className={
            style ? `${style}` : `group flex flex-col justify-center items-center cursor-pointer `
          }>
          {name}
          <div
            className={`h-1 w-0 rounded translate-all ease-in duration-200 opacity-0 bg-green-600 group-hover:opacity-100 group-hover:w-3/5 ${
              router.pathname === link ? "opacity-100 w-3/5" : null
            }`}></div>
        </div>
      ))}
    </div>
  );
};
