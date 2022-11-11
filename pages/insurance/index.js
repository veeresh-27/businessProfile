// import insurance from "../public/img/insurance.png";
import all from "../../public/img/all.jpg";
import banner from "../../public/img/personalbanner_in.jpg";

import personal from "../../public/img/personal.png";
import insurance from "../../public/img/insurance.png";
import Image from "next/image";

import { InsuranceCard } from "../../components/insuranceCard";
import { useState } from "react";

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
  const insurancePlans = [
    {
      id: 1,
      title: "Term Life Insurance",
      lines: [
        "The most affordable form of life insurance, premiums of plan\n" +
          "                under this category are cheap compared to other life insurance\n" +
          "                products.",
        "In the event of an unfortunate demise during the policy term,\n" +
          "                Nominees will receive the ‘Sum Assured’.",
      ],
    },
    {
      id: 2,
      title: "Whole Life Policy",
      lines: [
        "The most affordable form of life insurance, premiums of plan\n" +
          "                under this category are cheap compared to other life insurance\n" +
          "                products.",
        "In the event of an unfortunate demise during the policy term,\n" +
          "                Nominees will receive the ‘Sum Assured’.",
      ],
    },
    {
      id: 3,
      title: "Endowment Plan",
      lines: [
        "The main difference that Endowment Plans offer from term plans\n" +
          "                is the Maturity Benefit.",
        "This type of plan pays out sum assured along with profits under\n" +
          "                both scenarios - death & survival. The profits that are availed\n" +
          "                in such plans are the result of investment in equities & debt.",
      ],
    },
    {
      id: 4,
      title: "Unit Linked Insurance Plans (ULIPs)",
      lines: [
        "As the name suggests, this plan is linked to the markets.",
        "This type of plan are a variant of traditional endowment plan\n" +
          "                and pay out a certain sum assured on death or maturity,\n" +
          "                whichever is earlier.",
      ],
    },
    {
      id: 5,
      title: "Money Back Policy",
      lines: [
        "This type of policy gives out periodic payments over the policy\n" +
          "                term.",
        "Incase of the death of the policy holder, the beneficiaries get\n" +
          "                the full sum assured and if the holder survives the policy term,\n" +
          "                he/she gets the balance amount (sum assured).",
      ],
    },
    {
      id: 6,
      title: "Chile Higher Education Plan",
      lines: [
        "This type of policy gives out periodic payments over the policy term.\n" +
          "\n" +
          "Incase of the death of the policy holder, the beneficiaries get the full sum assured and if the holder survives the policy term, he/she gets the balance amount (sum assured).",
      ],
    },
    {
      id: 7,
      title: "Daughter Marriage Plan",
      lines: [
        "This type of policy gives out periodic payments over the policy term.\n" +
          "\n" +
          "Incase of the death of the policy holder, the beneficiaries get the full sum assured and if the holder survives the policy term, he/she gets the balance amount (sum assured).",
      ],
    },
    {
      id: 8,
      title: "Happy Retirement Plan",
      lines: [
        "This type of policy gives out periodic payments over the policy term.\n" +
          "\n" +
          "Incase of the death of the policy holder, the beneficiaries get the full sum assured and if the holder survives the policy term, he/she gets the balance amount (sum assured).",
      ],
    },
    {
      id: 9,
      title: "Tac Benefit Plan",
      lines: [
        "This type of policy gives out periodic payments over the policy term.\n" +
          "\n" +
          "Incase of the death of the policy holder, the beneficiaries get the full sum assured and if the holder survives the policy term, he/she gets the balance amount (sum assured).",
      ],
    },
    {
      id: 10,
      title: "Lifetime Income & Protection Plam",
      lines: [
        "This type of policy gives out periodic payments over the policy term.\n" +
          "\n" +
          "Incase of the death of the policy holder, the beneficiaries get the full sum assured and if the holder survives the policy term, he/she gets the balance amount (sum assured).",
      ],
    },
  ];

  return (
    <div className=" px-4 md:px-14 lg:px-24">
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
                active === index
                  ? "border-green-600 scale-110 text-black"
                  : null
              }`}
              onClick={() => setActive(index)}
            >
              {name}
            </div>
          </>
        ))}
      </div>
      {active === 0 ? (
        <div className="  py-2 bg-white-200  justify-center  ">
          <div className="py-4">
            <div>
              <h1 className="text-xl text-green-600  font-bold">
                Why Life Insurance
              </h1>

              <h2 className="text-lg my-4   ">
                Looking for Investing in a Life Insurance product? But not sure
                exactly how it works?
              </h2>

              <p className="  text-md font-base text-gray-600 my-3 ">
                Well this page is aimed to give you a complete understanding on
                how it works and what you need to understand to choose the
                products that suits you the best. As at every life stage,
                everyone has a set of primary needs that requires sufficient
                funds to fulfill them. This is where life insurance comes into
                the picture- as it offers tailor made products to cover every
                aspect at different stages of life.
              </p>
              <div className="flex  text-md font-base text-gray-600">
                <div className=" flex align-center justify-center">
                  {" "}
                  <Image className="px-10" src={insurance} alt="" />
                </div>
                <div>
                  <p>
                    There is no doubt that life insurance is a must have for
                    everyone. Hence its very crucial to have a complete
                    understanding of the value a life insurance policy can bring
                    in to your life and that of your loved ones.
                  </p>
                  <p className="my-3">
                    A life insurance policy is actually a contract with a
                    insurance company. A lump sum amount is provided, in
                    exchange for premium payments, known as the death benefits,
                    to the nominees or beneficiaries upon the death of the
                    insurer.
                  </p>
                  <p className="my-3">
                    While choosing a life insurance, the advisor will help you
                    to map it needs & goals. This will help you pick out the
                    options that suits you the best
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-xl font-bold text-green-600 ">
                What Does It Offer?
              </h1>

              <p className="  text-md font-base text-gray-600 my-3 ">
                Insurance has lot to offer in terms financial security and peace
                of mind. It ensures that your family is taken care of in your
                absence. It not only helps in providing coverage for all sorts
                of risks, but builds an opportunity to help you grow your
                investments. Life insurance is a long term investment tool that
                helps you meet future costs like childrens education expenses,
                retirement expenses etc.
              </p>
              <p className="text-md font-base text-gray-600 my-3 ">
                There are plenty of life insurance plans available, depending on
                an individuals needs, many of these plans can also be customized
                to meet their likes.
              </p>
            </div>
            <div className="flex flex-col items-center mt-12">
              <h1 className="text-xl font-bold text-green-600 ">
                Types Of Insurance
              </h1>
              <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center mt-4">
                {insurancePlans.map((plan) => (
                  <InsuranceCard
                    key={plan.id}
                    title={plan.title}
                    lines={plan.lines}
                    id={plan.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-white-200  justify-center ">
          {" "}
          <div className="py-5 ">
            <h1 className=" text-xl font-bold text-green-600">
              Health Insurance
            </h1>
            <div className="my-3">
              {" "}
              <h3 className="text-normal font-bold text-green-600">
                Why A Health Plan?
              </h3>
              <p className="text-md font-base text-gray-500 ">
                In todays fast paced lives that we live and in a race to excel
                in everything, we forget one of the most important asset we own
                i.e. our health. Due to various habits & changing lifestyles,
                health related concerns have just become increasingly alarming.
                We may not be to go back to slow down the pace of our lives but
                can definitely guard ourselves from its side effect. Here when
                an efficient health cover comes handy so that any sudden illness
                doesnt derail our financial freedom.
              </p>
            </div>

            <p className="text-md font-base text-gray-500 ">
              Medical assistance comes with a price tag, such that people are
              forced to sell of their assets or rely on borrowers to meet the
              expenses. Such unforeseen events can be easily dealt with a strong
              health insurance plans. So guard your finances by opting for
              complete protection for you & your family by getting adequate
              health cover as per your requirements.
            </p>
          </div>
          <div className="p-4 ">
            <h1 className=" text-xl font-bold text-green-600">
              Personal Accident
            </h1>
            <div className=" flex align-center justify-center">
              <Image src={banner} className="px-10 mt-6" alt="" />
            </div>
            <h2 className=" text-md font-medium text-green-600 my-3 mt-6">
              {" "}
              Why Personal Accident Insurance?
            </h2>
            <p className="text-md font-base text-gray-500 my-3">
              Life is uncertain & immeasurable. Accidents & uneventful incidents
              never ring a warning bell before they strike. Road mishaps,
              accidents have gone up tremendously & the victims along with their
              families suffer the consequences of the such unfortunate
              situation. Alarming statistics report about 1214 road related
              death that occur in India every year; this should be an eye opener
              on the perils an individual is exposed daily.
            </p>
            <p className="text-md font-base text-gray-500 my-3">
              While minor accidents can cause temporary hurdles, major ones can
              lead to disability for life or even demise. With a view to
              providing certain relief, insurance companies have devised various
              policies that serve as true life savers when met with an
              unfortunate circumstance.
            </p>
            <div className=" flex align-center justify-center">
              <Image src={personal} alt="" className="md:px-30" />
            </div>
            <div className="py-4">
              <h1 className="text-md font-medium text-green-600 my-3">
                Advantages of Personal Accident Policy:
              </h1>
              <p className="text-md font-base text-gray-500 my-3">
                Give yourself a minute to think about what will happen to your
                dependents if you were disabled because of an accident? There
                will be no monthly income, no cash inflows but expenses will
                continue to rise. In such case, an accident insurance policy
                will help you bring these expenses under control.
              </p>
              <p className="text-md font-normal text-green-600 my-3">
                Additional advantages are:
              </p>
              {/*<div className="mx-20   text-md font-base text-gray-500 ">*/}
              {/*  <p>Substantial coverage offered with low premium.</p>*/}
              {/*  <p>*/}
              {/*    Double indemnity for disability for mishaps occurred while*/}
              {/*    traveling in public transport.*/}
              {/*  </p>*/}
              {/*  <p>Easy claim process.</p>*/}
              {/*  <p>Highly customized plan available.</p>*/}
              {/*  <p>World wide coverage.</p>*/}
              {/*  <p>Can be bought for individual & family.</p>*/}
              {/*  <p>Child education advantage.</p>*/}
              {/*  <p>No requirement of medical tests & documentation.</p>*/}
              {/*</div>*/}
              <ul
                role="list"
                className="  marker:text-green-600 list-disc pl-5 space-y-3 text-slate-400"
              >
                <li>Substantial coverage offered with low premium</li>
                <li>
                  {" "}
                  Double indemnity for disability for mishaps occurred while
                  traveling in public transport.
                </li>
                <li>Easy claim process</li>
                <li>Highly customized plan available</li>
                <li>World wide coverage</li>
                <li>Can be bought for individual & family</li>
                <li>Child education advantage</li>
                <li>No requirement of medical tests & documentation</li>
              </ul>
            </div>
          </div>
          <div>
            <div className=" flex align-center justify-center">
              <Image src={all} alt="" />
            </div>
          </div>
          <div className="py-4 flex flex-col px-3">
            <h1 className="text-xl text-green-600  font-bold">
              What does the policy cover?
            </h1>

            <div className="mt-4">
              <h2 className="text-md text-green-600 font-medium ">
                Accidental Death
              </h2>
              <p className=" text-md font-base text-gray-600 ">
                Accidental death coverage gives compensation on the
                policyholders death caused by bodily injury resulting out of an
                accident. The nominee will receive entire sum assured offered by
                the insurer.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium ">
                Permanent or Total Disability
              </h2>
              <p className=" text-md font-base text-gray-600 ">
                If the accident causes permanent or total disability, then 100%
                of the sum insured is payable to the policyholder.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium ">
                Permanent or Total Disability
              </h2>
              <p className=" text-md font-base text-gray-600 ">
                If the accident causes permanent or total disability, then 100%
                of the sum insured is payable to the policyholder.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium ">
                Accidental Dismemberment
              </h2>
              <p className=" text-md font-base text-gray-600 ">
                If policyholders body part has been dismembered or severed in
                the accident then the person can claim the sum insured.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium">
                Additional Benefits
              </h2>
              <p className=" text-md font-base text-gray-600">
                Funeral expenses can be claimed in case of accidental death.
                Expenses incurred for transportation of policyholders dead body
                from the accident spot to the residence place is covered.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-md text-green-600 font-medium ">
                Daily Hospitalization Expenses
              </h2>
              <p className=" text-md font-base text-gray-600 ">
                Monetary relief offered to the patient on daily basis on
                hospitalization.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium">Burns</h2>
              <p className=" text-md font-base text-gray-600 ">
                A certain amount of the policy sum is payable, when an accident
                results in hospitalization & the victim is being treated for
                burn injuries.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium  ">Bonuses</h2>
              <p className=" text-md font-base text-gray-600 ">
                Some policies may offer bonuses to the dependent kids of the
                policyholder. This becomes helpful in case of the death of the
                policyholder or extension of treatment period.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
