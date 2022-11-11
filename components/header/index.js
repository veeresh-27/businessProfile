// import { useNavigate } from "react-router-dom";
import { Links } from "../Links";
import { IconBurger } from "../../public/icons";
import { useState } from "react";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  const [mobNav, setMobNav] = useState(false);
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full bg-white md:px-5 lg:px-14 xl:px-20 h-14">
      <div className="p-3 text-xl text-green-600 font-bold cursor-pointer text-primary sm:text-2xl md:text-2xl lg:text-3xl">
        <h1 onClick={() => router.push("/")}>My&nbsp;Financer</h1>
      </div>
      <div className="hidden md:flex md:items-center transition-all ease-in duration-500  gap-2 ">
        <Links />
      </div>
      <div
        className="md:hidden p-3 cursor-pointer"
        onClick={() => setMobNav(!mobNav)}
      >
        <IconBurger />
      </div>
      <div
        className={` md:hidden rounded fixed inset-1 bg-gray-900/95 left-1/2 top-12 p-4  z-9 ${
          mobNav ? "flex flex-col justify-center" : "hidden"
        } `}
      >
        <Links isOnMobile setMobNav={setMobNav} />
      </div>
    </div>
  );
}
