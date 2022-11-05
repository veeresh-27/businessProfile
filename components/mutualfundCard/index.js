export const MutualFundCard = ({ title, desc }) => {
  return (
    <div className="border-2  px-4  h-64 w-96 rounded-lg text-ellipsis overflow-hidden ">
      <h1 className="text-lg text-green-600  my-4 font-bold">{title}</h1>
      <p className="text-md font-base text-gray-600 ">{desc}</p>
    </div>
  );
};
