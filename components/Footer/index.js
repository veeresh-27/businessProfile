import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white shadow flex flex-col items-center justify-center padding gap-4  dark:bg-gray-100">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-900">
        © 2022
        <a href="#" className="hover:underline">
          My&nbsp;Financer™
        </a>
        <br />. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-800 dark:text-gray-800 sm:mt-0">
        <li>
          <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link href="/insurance" className="mr-4 hover:underline md:mr-6">
            Insurance
          </Link>
        </li>
        <li>
          <Link href="/mutualfunds" className="mr-4 hover:underline md:mr-6">
            Mutual&nbsp;Funds
          </Link>
        </li>
        <li>
          <Link href="/homeloans" className="hover:underline">
            Home&nbsp;Loan
          </Link>
        </li>
        <li>
          <Link href="/contact" className="px-3 hover:underline">
            Contact Us
          </Link>
        </li>
      </ul>
    </footer>
  );
};
