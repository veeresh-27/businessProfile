export const InsuranceCard = ({ title, lines, id }) => {
  const cardColors = [
    "bg-red-200",
    "bg-amber-200",
    "bg-emerald-200",
    "bg-gray-200",
    "bg-sky-200",
  ];
  return (
    <div
      className={`flex flex-col w-5/5 md:w-2/5 border-2  border-green-600 p-4  ${
        cardColors ? `${cardColors[(id - 1) % cardColors.length]}` : null
      } rounded-xl text-md   text-center font-base text-gray-600 my-3 `}
    >
      <h2 className="text-md  font-bold">{title}</h2>
      {lines?.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};
