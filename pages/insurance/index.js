// import insurance from "../public/img/insurance.png";


import { useState } from "react";
import { LifeInsurance } from "../../components/tabs/lifeInsurance";
import {HealthInsurance} from "../../components/tabs/healthInsurance";
export default function Insurance() {
  const [active, setActive] = useState(0);
  const tabs = [
    {
      name: "Life Insurance",
    },
    {
      name: "Health Insurance",
    },
  ];
  

  return (
    <div className="padding">
      {" "}
      {/*<h1 className="text-2xl text-green-600 text-center font-bold ">*/}
      {/*  Life Insurance*/}
      {/*</h1>*/}
      <div className="flex font-medium justify-center md:justify-start pt-5 gap-8">
        {tabs?.map(({ name }, index) => (
          <>
            <div
              key={index}
              className={`cursor-pointer rounded text-gray-600 border-b-4 transition-all ease-in-out duration-500 ${
                active === index ? "border-green-600 scale-110 text-black" : null
              }`}
              onClick={() => setActive(index)}>
              {name}
            </div>
          </>
        ))}
      </div>
      {active === 0 ? (
        <LifeInsurance/>
      ) : (
        <HealthInsurance/>
      )}
    </div>
  );
}
