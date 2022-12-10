import React from "react";
import all from "../../public/img/all.jpg";
import banner from "../../public/img/home-page-cover-design-personal-accident.jpg";

import personal from "../../public/img/personal.png";
import Image from "next/image";

function HealthInsurance() {
  return (
    <div>
      <div className=" bg-white-200  justify-center ">
        {" "}
        <div className="py-5 ">
          <h1 className=" text-xl font-bold text-green-600">Health Insurance</h1>
          <div className="my-3">
            {" "}
            <h3 className="text-normal font-bold text-green-600">Why A Health Plan?</h3>
            <p className="text-md font-base text-gray-500 ">
              It’s important to have health insurance as a safety net. If you unexpectedly get sick
              or injured, health insurance is there to help cover costs that you likely can’t afford
              to pay on your own.
            </p>
          </div>

          <p className="text-md font-base text-gray-500 ">
            Health care can be very expensive. It can be an enormous financial burden. Surgery,
            emergency care, prescription drugs, lab work, scans and examinations – these sorts of
            costs can add up very quickly. They can even be high enough to cause individuals to go
            bankrupt, or to turn down care that they need but can’t afford out-of-pocket. But, with
            health insurance, you’re not facing those costs as an individual; there’s an insurance
            plan helping you cover the costs, and helping you navigate the confusion of medical
            billing.
          </p>
        </div>
        <div className="p-4 ">
          <h1 className=" text-xl font-bold text-green-600">Personal Accident</h1>
          <div className=" flex align-center justify-center md:w-[80%]">
            <Image src={banner} className="px-10 mt-6" alt="" />
          </div>
          <h2 className=" text-md font-medium text-green-600 my-3 mt-6">
            {" "}
            Why Personal Accident Insurance?
          </h2>
          <p className="text-md font-base text-gray-500 my-3">
            An accident can occur at any time without any warning, and sometimes it can cause
            serious harm. Any such untoward incident can have a significant impact on your finances;
            not only can the treatment be expensive, but if you suffer from any form of disability,
            it can affect your earning potential. To protect yourself and your family from such a
            situation, it is paramount that you purchase a personal accident insurance policy.
          </p>
          <p className="text-md font-base text-gray-500 my-3">
            Personal accident insurance is useful to get the financial assistance to you and your
            family in the event of an accident that leads to death, bodily injuries, temporary total
            disability, permanent total disability and permanent partial disability. In the event of
            death, the insurance company will pay 100% compensation (equal to the sum assured) to
            the appointed nominee. Also, the insurance companies offer compensation for an accident
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
              A lot of people ignore buying accident insurance, mainly because they don’t understand
              the importance of the cover. But, you must think about the safety and security of your
              family and how can they sustain themselves financially if something untoward happens
              to you. If you get involved in an accident that leads to death or disability, it would
              have an impact on your income. If you have any liability like home loan, it would be
              difficult for the family members to meet the expenses. Besides, you must also take
              care of the treatment cost. To avoid putting your family in such a financially
              distressed situation, you must invest in the best accident insurance.
            </p>
            <p className="text-md font-bold text-green-600 my-3">
              Types of Personal Accident Insurance
            </p>
            <p className="text-md font-bold text-gray-400 my-2">
              The personal accident insurance can be broadly classified into two categories – Group
              Accident Insurance and Individual Accident Insurance.
            </p>

            <ul role="list" className=" marker:text-green-600 list-disc pl-5 text-slate-400">
              <li className="font-bold">Group Personal Accident Insurance </li>
              <p>
                Typically, the business owners and employers buy group personal accident insurance
                to cover their employees. Depending on the size of the organisation, and the number
                of employees, the insurance companies offer a discount on the premium. A group
                personal accident policy is an excellent incentive for the employees as it assures
                them financial safety in the event of any mishap at the workplace.
              </p>
              <li className="font-bold"> Individual Personal Accident Insurance</li>
              <p>
                As the name suggests, it is taken by an individual and it guards the policyholders
                against the accidental damages. It usually covers accidental death, loss of body
                parts and other disabilities resulting from an accident.
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
          <h1 className="text-xl text-green-600  font-bold">What does the policy cover?</h1>

          <div className="mt-4">
            <h2 className="text-md text-green-600 font-medium ">1. Accidental Death</h2>
            <p className=" text-md font-base text-gray-600 ">
              Accidental death coverage gives compensation on the policyholders death caused by
              bodily injury resulting out of an accident. The nominee will receive entire sum
              assured offered by the insurer.
            </p>
          </div>
          <div className="mt-4">
            {" "}
            <h2 className="text-md text-green-600 font-medium ">
              2. Permanent or Total Disability
            </h2>
            <p className=" text-md font-base text-gray-600 ">
              If the accident causes permanent or total disability, then 100% of the sum insured is
              payable to the policyholder.
            </p>
          </div>
          <div className="mt-4">
            {" "}
            <h2 className="text-md text-green-600 font-medium ">3. Accidental Dismemberment</h2>
            <p className=" text-md font-base text-gray-600 ">
              If policyholders body part has been dismembered or severed in the accident then the
              person can claim the sum insured.
            </p>
          </div>
          <div className="mt-4">
            {" "}
            <h2 className="text-md text-green-600 font-medium">4. Additional Benefits</h2>
            <p className=" text-md font-base text-gray-600">
              Funeral expenses can be claimed in case of accidental death. Expenses incurred for
              transportation of policyholders dead body from the accident spot to the residence
              place is covered.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-md text-green-600 font-medium ">
              5. Daily Hospitalization Expenses
            </h2>
            <p className=" text-md font-base text-gray-600 ">
              Monetary relief offered to the patient on daily basis on hospitalization.
            </p>
          </div>
          <div className="mt-4">
            {" "}
            <h2 className="text-md text-green-600 font-medium">6. Burns</h2>
            <p className=" text-md font-base text-gray-600 ">
              A certain amount of the policy sum is payable, when an accident results in
              hospitalization & the victim is being treated for burn injuries.
            </p>
          </div>
          <div className="mt-4">
            {" "}
            <h2 className="text-md text-green-600 font-medium  ">7. Bonuses</h2>
            <p className=" text-md font-base text-gray-600 ">
              Some policies may offer bonuses to the dependent kids of the policyholder. This
              becomes helpful in case of the death of the policyholder or extension of treatment
              period.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export {HealthInsurance};
