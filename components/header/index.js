// import { useNavigate } from "react-router-dom";
import { Link } from  "../Link"
import {IconBurger} from "../../public/icons";

export function Header(){
    return(
<div className="sticky top-0 z-50 flex items-center justify-between w-full bg-background md:px-5 lg:px-14 xl:px-20 h-14 ">
<div
    className="p-3 text-xl font-bold cursor-pointer text-primary sm:text-2xl md:text-2xl lg:text-3xl">
    <h1>My&nbsp;Financer</h1>


</div>
    <div className="hidden md:flex md:items-center transition-all ease-in duration-500  gap-2 "><Link/></div>
    <div className='md:hidden p-3 cursor-pointer'><IconBurger/></div>
</div>

    );
}
