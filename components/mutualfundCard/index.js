export const MutualFundCard = ({ title, desc }) => {
  return (
    <div className="border-2  px-4 py-2  md:w-[48%] rounded-lg  text-ellipsis overflow-hidden ">
      <h1 className="text-lg text-green-600  pb-2 font-bold">{title}</h1>
      <p className="text-md font-base text-gray-600 ">{desc}</p>
    </div>
  );
};
