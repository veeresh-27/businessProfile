// import { useNavigate } from "react-router-dom";
import { Link } from  "../Link"
import {IconBurger} from "../../public/icons";
import {useState} from "react";

export function Header(){
    const [mobNav,setMobNav] = useState(false);
    return(
<div className="sticky top-0 z-50 flex items-center justify-between w-full bg-background md:px-5 lg:px-14 xl:px-20 h-14 relative">
<div
    className="p-3 text-xl font-bold cursor-pointer text-primary sm:text-2xl md:text-2xl lg:text-3xl">
    <h1>My&nbsp;Financer</h1>
</div>
    <div className="hidden md:flex md:items-center transition-all ease-in duration-500  gap-2 "><Link/></div>
        <div className='md:hidden p-3 cursor-pointer' onClick={()=>setMobNav(!mobNav)}><IconBurger/></div>
        <div className={`flex flex-col absolute w-1/3 bg-gray-900 top-12 right-0 p-3  ${mobNav ? 'transfrom translate-x-0': 'transfrom translate-x-full opacity-0'} translate-all ease-in-out duration-200`}><Link isOnMobile setMobNav/></div>
</div>
    );
}
