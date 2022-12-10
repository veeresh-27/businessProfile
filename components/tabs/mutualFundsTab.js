import Image from "next/image";
import topImage from "../../public/img/mutual-fund.webp";
import { mutualfundsInvestments } from "../../constants";
import typesOfMmutualFund from "../../public/img/mf.jpg";
import { MutualFundCard } from "../mutualfundCard";
import { typesOfMutualFunds } from "../../constants";
import React from "react";

export function MutualFundsTab() {
  return (
    <>
      <div>
        <div className="flex gap-4 items-center flex-col-reverse md:flex-row pt-10 md:pt-0">
          <div className="flex md:basis-3/5 md:pr-6">
            <p className=" text-md font-bold text-gray-500 mb-4 py-4  ">
              {" "}
              <span className="text-xl text-green-600 ">Mutual Funds</span> is an investment vehicle
              that pools funds from investors and invests in equities, bonds, government securities,
              gold, and other assets. Companies that qualify to set up mutual funds, create Asset
              Management Companies (AMCs) or Fund Houses, which pool in the money from investors,
              market mutual funds, manage investments and enable investor transactions. Mutual funds
              are managed by sound financial professionals known as fund managers, who have the
              expertise in analysing and managing investments. The funds collected from investors in
              mutual funds are invested by the fund managers in different financial assets such as
              stocks, bonds, and other assets, as defined by the fund’s investment objective. Where
              and when to invest are some of the things taken care of by the fund managers, amongst
              many other responsibilities.
            </p>
          </div>
          <div className="flex p-4 md:w-[400px]">
            <Image src={topImage} alt={""} />
          </div>{" "}
        </div>

        <div className="flex">
          <div className="">
            <p className="text-md font-base text-gray-600 ">
              For the fund management, the AMC charges a fee to the investor known as the expense
              ratio. It is not a fixed fee and varies from one mutual fund to another. SEBI has
              defined the maximum limit of the expense ratio that can be charged on the basis of the
              total assets of the fund. In India, the capital markets regulator SEBI (Securities and
              Exchange Board of India) has encouraged the mutual fund industry by creating a system
              that works for the benefit of all stakeholders, including investors and mutual fund
              sponsors. Regulations are passed from time to time which improves functioning and help
              attract investments and generate growth.
            </p>
          </div>
        </div>
      </div>
      <div className="my-5   ">
        <h1 className="text-xl text-green-600  my-4 font-bold ">Why To Invest In Mutual Funds?</h1>
        <h3 className="text-lg">
          Lets glance at why should one consider investing in mutual funds over other options to
          achieve their financial goals:
        </h3>
        <div className="flex my-5 gap-5 flex-wrap justify-center">
          {mutualfundsInvestments?.map(({ id, title, desc }) => (
            <MutualFundCard key={id} title={title} desc={desc} />
          ))}
        </div>
      </div>
      <div className=" my-5   ">
        <h1 className="text-xl text-green-600  my-4 font-bold">Types Of Mutual Funds</h1>
        <div className="flex align-center justify-center">
          <Image src={typesOfMmutualFund} alt={"ufhwe"} />
        </div>

        <div className="flex flex-col gap-4 ">
          {typesOfMutualFunds?.map(({ name, desc }, index) => (
            <div key={index}>
              <h1 className="text-md text-green-600  font-bold">
                {`${index + 1}.`} {name}
              </h1>
              <p className="text-md font-base text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
