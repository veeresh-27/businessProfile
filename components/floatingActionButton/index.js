import { IconContact } from "../../public/icons";
import { useRouter } from "next/router";

export function FloatingActionButton() {
  const router = useRouter();
  const handleClickOnLink = (link) => {
    router.push(`/contact`);
  };
  return (
    <>
      {" "}
      <div
        onClick={handleClickOnLink}
        className="fixed hidden md:flex items-center gap-2 text-lg cursor-pointer py-2 px-3 bg-green-600  text-white transition-all ease-in-out duration-500 rounded-full z-99 bottom-10 right-4 md:right-10 hover:animate-bounce">
        Contact <IconContact />
      </div>
      <div
        onClick={() => handleClickOnLink(link)}
        className="fixed flex md:hidden items-center gap-2 text-lg cursor-pointer py-2 px-3 bg-green-600  text-white transition-all ease-in-out duration-500 rounded-full z-99 bottom-10 right-4 md:right-10 hover:animate-bounce">
        {" "}
        <IconContact />
      </div>
    </>
  );
}
