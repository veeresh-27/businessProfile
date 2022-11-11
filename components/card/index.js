import Image from "next/image";
import { useRouter } from "next/router";
//import mutual from "../../public/img/mutual_fund.png";

export const Card = ({
  image,
  link,
  title = "Head",
  des = "loremdfv invifd eodivn eoinfv def dfvef",
}) => {
  const router = useRouter();
  return (
    <div className="rounded-lg shadow-lg bg-white max-w-xs">
      {image ? (
        <a href={link ? link : "/"}>
          <Image className="rounded-md" src={image} alt={`${title} img`} />
        </a>
      ) : null}
      <div className="p-4">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
        <p className="text-gray-700 text-base mb-4">{des}</p>
        <button
          type="button"
          title={`Read about ${title}`}
          className="inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={() => (link ? router.push(link) : null)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};
