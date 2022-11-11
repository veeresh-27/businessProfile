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
      title: "Tax Benefit Plan",
      lines: [
        "Tax saving investments are central to financial planning and growth as they offer tax saving under Section 80C and 80CCC of the Income Tax Act of India – while also acting as a backup plan for unexpected expenses and emergencies.",
      ],
    },
    {
      id: 2,
      title: "Lifetime Income & Protection Plam",
      lines: [
        " Retirement years are surely the golden phase of life and anyone would wish to do\n" +
          "\n" +
          "all those things,which they had been planning for long or had not given it much of a thought or priority. \n" +
          " Retirement is the golden phase where in you would want to everything and not worry about the financial expenses.",
      ],
    },
    {
      id: 3,
      title: "Child Higher Education Plan",
      lines: [
        "  Child Education Insurance Plans are insurance plans that take care of your protection and savings needs for securing the future of your children\n" +
          "\n" +
          "As a parent, one of your most important goals would be to make sure that your children have a bright future and lead their lives comfortably.",
      ],
    },

    {
      id: 4,
      title: "Happy Retirement Plan",
      lines: [
        "        The thumb rule for retirement planning is - the earlier you start, the more you save.\n" +
          "\n" +
          "However, with age, your priorities change too. So, you need to factor in the cost of living in the present vis- a -vis future,\n " +
          "inflationary pressures as well as healthcare costs. It is not about the quantity, it is more about the  quality and your future needs.",
      ],
    },
    {
      id: 6,
      title: "Money Back Policy",
      lines: [
        "A money back policy is a type of life insurance product that provides the dual benefit of investment and protection. With a money back policy, you can receive returns at regular intervals during the policy term. A money back policy also provides a life cover that keeps your loved ones financially protected in case of an unfortunate event.",
      ],
    },
    {
      id: 8,
      title: "Daughter Marriage Plan",
      lines: [
        "Planning for children’s marriage starts when the children are young\n" +
          "\n" +
          "You must save and invest as early as possible to give the money the time to grow into a large corpus.  You must choose an investment that offers return above inflation over the long term.",
      ],
    },
    {
      id: 9,
      title: "Term Life Insurance",
      lines: [
        "Term insurance is a type of life insurance that provides coverage for a specific period of time or years, i.e., a term. This type of life insurance provides a financial benefit to the nominee in case of the unfortunate demise of the insured during the policy term. Term Insurance policies provide high life cover at lower premiums.",
      ],
    },
    {
      id: 10,
      title: "Endowment Plan",
      lines: [
        "Endowment plan is a life insurance policy which provides you with a combination of both i.e.: an insurance cover, as well as an savings plan. It helps you in saving regularly over a specific period of time,\n " +
          "so that you are able to get a lump sum amount on policy maturity, if the policyholder survives the policy term.",
      ],
    },
    {
      id: 11,
      title: "Whole Life Policy",
      lines: [
        "Are one type of permanent life insurance. Universal life, indexed universal life, and variable universal life are others. Whole life insurance is the original life insurance policy, But whole life does not equal permanent life insurance as there are many types of permanent life.",
      ],
    },
    {
      id: 12,
      title: "Unit Linked Insurance Plans (ULIPs)",
      lines: [
        " ULIP is the acronym for Unit Linked Insurance Plan.",
        "A ULIP is the combination of investment and insurance.\n" +
          "Within this plan,the policyholders can make the premium payment annually or monthly. One part of the premium amount is used to provide a life insurance cover and the remaining sum is invested.",
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
                Life insurance provides financial security for loved ones in the
                event of the policyholder's death. The death benefit can be used
                to cover funeral and burial expenses, pay off debts, or provide
                for the family's future financial needs. Choosing the right life
                insurance policy is an important decision. There are many
                factors to consider, such as the policy's death benefit, premium
                payments, and terms. It is important to compare different
                policies and choose the one that best meets the needs of the
                policyholder and their beneficiaries.
              </p>
              <div className="flex  text-md font-base text-gray-600">
                <div className=" flex align-center justify-center">
                  {" "}
                  <Image className="px-10" src={insurance} alt="" />
                </div>
                <div className="my-10">
                  <p>
                    A life insurance policy typically covers the policyholder's
                    death, but it can also cover other events such as terminal
                    illness or critical illness. The policy's terms will
                    determine what events are covered and how the death benefit
                    is paid out.
                  </p>
                  <p className="my-3">
                    A life insurance policy is actually a contract with a
                    insurance company. A lump sum amount is provided, in
                    exchange for premium payments, known as the death benefits,
                    to the nominees or beneficiaries upon the death of the
                    insurer.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-xl font-bold text-green-600 ">
                What Life Insurance Offer?
              </h1>

              <p className="  text-md font-base text-gray-600 my-3 ">
                Most life insurance policies offer a death benefit, which is a
                lump sum of money paid to the beneficiaries of the policyholder
                upon their death. Some policies also offer living benefits,
                which are payments made to the policyholder while they are still
                alive. These benefits can be used to cover expenses such as
                long-term care or medical bills. Life insurance is a long term
                investment tool that helps you meet future costs like daughter
                marriage plan, retirement expenses, children education plan etc.
              </p>
              <p className="text-md font-base text-gray-600 my-3 ">
                There are wide range of life insurance plans available,
                depending on an individuals needs, many of these plans can also
                be customized to meet their goals.
              </p>
            </div>
            <div className="flex flex-col items-center mt-12">
              <h1 className="text-xl font-bold text-green-600 ">
                Types Of Schemes/Plans
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
                It’s important to have health insurance as a safety net. If you
                unexpectedly get sick or injured, health insurance is there to
                help cover costs that you likely can’t afford to pay on your
                own.
              </p>
            </div>

            <p className="text-md font-base text-gray-500 ">
              Health care can be very expensive. It can be an enormous financial
              burden. Surgery, emergency care, prescription drugs, lab work,
              scans and examinations – these sorts of costs can add up very
              quickly. They can even be high enough to cause individuals to go
              bankrupt, or to turn down care that they need but can’t afford
              out-of-pocket. But, with health insurance, you’re not facing those
              costs as an individual; there’s an insurance plan helping you
              cover the costs, and helping you navigate the confusion of medical
              billing.
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
              An accident can occur at any time without any warning, and
              sometimes it can cause serious harm. Any such untoward incident
              can have a significant impact on your finances; not only can the
              treatment be expensive, but if you suffer from any form of
              disability, it can affect your earning potential. To protect
              yourself and your family from such a situation, it is paramount
              that you purchase a personal accident insurance policy.
            </p>
            <p className="text-md font-base text-gray-500 my-3">
              Personal accident insurance is useful to get the financial
              assistance to you and your family in the event of an accident that
              leads to death, bodily injuries, temporary total disability,
              permanent total disability and permanent partial disability. In
              the event of death, the insurance company will pay 100%
              compensation (equal to the sum assured) to the appointed nominee.
              Also, the insurance companies offer compensation for an accident
              disability such as loss of speech, limbs and eyes.
            </p>
            <div className=" flex align-center justify-center">
              <Image src={personal} alt="" className="md:px-30" />
            </div>
            <div className="py-4">
              <h1 className="text-md font-medium text-green-600 my-3">
                Advantages of Personal Accident Policy:
              </h1>
              <p className="text-md font-base text-gray-500 my-3">
                A lot of people ignore buying accident insurance, mainly because
                they don’t understand the importance of the cover. But, you must
                think about the safety and security of your family and how can
                they sustain themselves financially if something untoward
                happens to you. If you get involved in an accident that leads to
                death or disability, it would have an impact on your income. If
                you have any liability like home loan, it would be difficult for
                the family members to meet the expenses. Besides, you must also
                take care of the treatment cost. To avoid putting your family in
                such a financially distressed situation, you must invest in the
                best accident insurance.
              </p>
              <p className="text-md font-bold text-green-600 my-3">
                Types of Personal Accident Insurance
              </p>
              <p className="text-md font-bold text-gray-400 my-2">
                The personal accident insurance can be broadly classified into
                two categories – Group Accident Insurance and Individual
                Accident Insurance.
              </p>

              <ul
                role="list"
                className=" marker:text-green-600 list-disc pl-5 text-slate-400"
              >
                <li className="font-bold">
                  Group Personal Accident Insurance{" "}
                </li>
                <p>
                  Typically, the business owners and employers buy group
                  personal accident insurance to cover their employees.
                  Depending on the size of the organisation, and the number of
                  employees, the insurance companies offer a discount on the
                  premium. A group personal accident policy is an excellent
                  incentive for the employees as it assures them financial
                  safety in the event of any mishap at the workplace.
                </p>
                <li className="font-bold">
                  {" "}
                  Individual Personal Accident Insurance
                </li>
                <p>
                  As the name suggests, it is taken by an individual and it
                  guards the policyholders against the accidental damages. It
                  usually covers accidental death, loss of body parts and other
                  disabilities resulting from an accident.
                </p>
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
                1. Accidental Death
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
                2. Permanent or Total Disability
              </h2>
              <p className=" text-md font-base text-gray-600 ">
                If the accident causes permanent or total disability, then 100%
                of the sum insured is payable to the policyholder.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium ">
                3. Accidental Dismemberment
              </h2>
              <p className=" text-md font-base text-gray-600 ">
                If policyholders body part has been dismembered or severed in
                the accident then the person can claim the sum insured.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium">
                4. Additional Benefits
              </h2>
              <p className=" text-md font-base text-gray-600">
                Funeral expenses can be claimed in case of accidental death.
                Expenses incurred for transportation of policyholders dead body
                from the accident spot to the residence place is covered.
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-md text-green-600 font-medium ">
                5. Daily Hospitalization Expenses
              </h2>
              <p className=" text-md font-base text-gray-600 ">
                Monetary relief offered to the patient on daily basis on
                hospitalization.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium">6. Burns</h2>
              <p className=" text-md font-base text-gray-600 ">
                A certain amount of the policy sum is payable, when an accident
                results in hospitalization & the victim is being treated for
                burn injuries.
              </p>
            </div>
            <div className="mt-4">
              {" "}
              <h2 className="text-md text-green-600 font-medium  ">
                7. Bonuses
              </h2>
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
