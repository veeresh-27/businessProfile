import React from 'react'
import whyInsurance from "../../public/img/why-choose-us.png";
import Image from "next/image";
import { InsuranceCard } from "../../components/insuranceCard";
import { insurancePlans } from "../../constants";


export function LifeInsurance(){
    return(
        <>
         <div className="  py-2 bg-white-200  justify-center  ">
          <div className="py-4">
            <div className="flex items-center md:justify-between flex-col md:flex-row">
              <div className=" flex md:w-[400px]">
                {" "}
                <Image className="" src={whyInsurance} alt="" />
              </div>
              <div className="flex flex-col basis-3/5">
                <h1 className="text-xl text-green-600  font-bold">Why Life Insurance</h1>

                {/*<h2 className="text-lg my-4   ">*/}
                {/*  Looking for Investing in a Life Insurance product? But not*/}
                {/*  sure exactly how it works?*/}
                {/*</h2>*/}

                <p className="  text-md font-base text-gray-600 my-3 ">
                  Life insurance provides financial security for loved ones in the event of the
                  policyholder&apos;s death. The death benefit can be used to cover funeral and
                  burial expenses, pay off debts, or provide for the family&apos;s future financial
                  needs. Choosing the right life insurance policy is an important decision. There
                  are many factors to consider, such as the policy&apos;s death benefit, premium
                  payments, and terms. It is important to compare different policies and choose the
                  one that best meets the needs of the policyholder and their beneficiaries.
                </p>
                <div className="flex  text-md font-base text-gray-600">
                  <div className="my-10">
                    <p>
                      A life insurance policy typically covers the policyholder&apos;s death, but it
                      can also cover other events such as terminal illness or critical illness. The
                      policy&apos;s terms will determine what events are covered and how the death
                      benefit is paid out.
                    </p>
                    <p className="my-3">
                      A life insurance policy is actually a contract with a insurance company. A
                      lump sum amount is provided, in exchange for premium payments, known as the
                      death benefits, to the nominees or beneficiaries upon the death of the
                      insurer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h1 className="text-xl font-bold text-green-600 ">What Life Insurance Offer?</h1>

              <p className="  text-md font-base text-gray-600 my-3 ">
                Most life insurance policies offer a death benefit, which is a lump sum of money
                paid to the beneficiaries of the policyholder upon their death. Some policies also
                offer living benefits, which are payments made to the policyholder while they are
                still alive. These benefits can be used to cover expenses such as long-term care or
                medical bills. Life insurance is a long term investment tool that helps you meet
                future costs like daughter marriage plan, retirement expenses, children education
                plan etc.
              </p>
              <p className="text-md font-base text-gray-600 my-3 ">
                There are wide range of life insurance plans available, depending on an individuals
                needs, many of these plans can also be customized to meet their goals.
              </p>
            </div>
            <div className="flex flex-col items-center mt-12">
              <h1 className="text-xl font-bold text-green-600 ">Types Of Schemes/Plans</h1>
              <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center mt-4">
                {insurancePlans.map((plan) => (
                  <InsuranceCard key={plan.id} title={plan.title} lines={plan.lines} id={plan.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
        </>
    )
}