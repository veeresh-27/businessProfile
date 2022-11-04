// import insurance from "../public/img/insurance.png";

// import life from "../public/img/life-insurance.png";
// import Image from "next/image";

import { InsuranceCard } from "../../components/insuranceCard";

export default function Insurance() {
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
    <>
      {" "}
      <h1 className="text-2xl text-green-600 text-center font-bold">
        Life Insurance
      </h1>
      <div className="border mt-10  bg-white-200  justify-center   ">
        <div className="mx-9 p-4 ">
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
              products that suits you the best. As at every life stage, everyone
              has a set of primary needs that requires sufficient funds to
              fulfill them. This is where life insurance comes into the picture-
              as it offers tailor made products to cover every aspect at
              different stages of life.
            </p>
            <div className="text-md font-base text-gray-600">
              {/*<Image className="rounded-md" src={life} alt="" />*/}
              <p>
                There is no doubt that life insurance is a must have for
                everyone. Hence its very crucial to have a complete
                understanding of the value a life insurance policy can bring in
                to your life and that of your loved ones.
              </p>
              <p className="my-3">
                A life insurance policy is actually a contract with a insurance
                company. A lump sum amount is provided, in exchange for premium
                payments, known as the death benefits, to the nominees or
                beneficiaries upon the death of the insurer.
              </p>
              <p className="my-3">
                While choosing a life insurance, the advisor will help you to
                map it needs & goals. This will help you pick out the options
                that suits you the best
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="text-xl font-bold text-green-600 ">
              What Does It Offer?
            </h1>

            <p className="  text-md font-base text-gray-600 my-3 ">
              Insurance has lot to offer in terms financial security and peace
              of mind. It ensures that your family is taken care of in your
              absence. It not only helps in providing coverage for all sorts of
              risks, but builds an opportunity to help you grow your
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
    </>
  );
}
