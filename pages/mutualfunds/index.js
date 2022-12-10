import { useState } from "react";
import { MutualFundsTab } from "../../components/tabs/mutualFundsTab";
import { Sip } from "../../components/tabs/sip";

export default function MutualFunds() {
  const [activeTab, setActiveTab] = useState(0);
  const [disclaimer, setDisclaimer] = useState(true);

  const tabs = [
    {
      name: "Mutual Funds",
    },
    {
      name: "SIP",
    },
  ];
  return (
    <div className="padding">
      <div className="flex font-medium justify-center md:justify-start pt-5 gap-8">
        {tabs?.map(({ name }, index) => (
          <>
            <div
              className={`cursor-pointer  border-b-4 rounded text-gray-600 transition-all ease-in-out duration-500 ${
                activeTab === index ? "border-green-600 scale-110 text-black " : null
              }`}
              key={index}
              onClick={() => setActiveTab(index)}>
              {name}
            </div>
          </>
        ))}
      </div>
      {activeTab === 0 ? <MutualFundsTab /> : <Sip />}
      {disclaimer ? (
        <div className="relative flex flex-col border-2 bg-yellow-100 border-yellow-300 rounded p-2">
          <h1 className="text-gray-800">Disclaimer!</h1>
          <p className="text-[12px] text-gray-800">
            Mutual Fund investments are subject to market risks, read all scheme related documents
            carefully
          </p>
          <div
            className="absolute -top-0 cursor-pointer -right-0 text-yellow-400"
            onClick={() => setDisclaimer(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
}
