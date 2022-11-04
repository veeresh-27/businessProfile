export const InsuranceCard = ({ title, lines, id }) => {
  const cardColors = ["emerald-200", "amber-200", "gray-200", "sky-200"];
  return (
    <div
      className={` border-2 border-green-600  bg-${
        cardColors[(id - 1) % cardColors.length]
      } rounded-xl text-md   text-center font-base text-gray-600 my-3 `}
    >
      <h2 className="text-md  font-bold">{title}</h2>
      {lines?.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};
