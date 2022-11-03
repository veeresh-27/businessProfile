// import { useNavigate } from "react-router-dom";
import { Link } from  "../Link"

export function Header(){
    return(
<div className="sticky top-0 z-50 flex items-center justify-between w-full bg-background md:px-5 lg:px-14 xl:px-20 h-14 ">
<div
    className="p-3 text-3xl font-bold cursor-pointer text-primary sm:text-xl md:text-xl lg:text-3xl">
    <h1>My&nbsp;Financer</h1>

</div>
    <Link/>
</div>

    );
}
