//import icon from "../../public/img/home_icon.jpg";
import Carousel from "../../components/carousel";
import { useRouter } from "next/router";
import homeImage from "../../public/img/home.jpg";
import Image from "next/image";
export default function Homeloans() {
  const router = useRouter();
  const carouselImages = [
    {
      img: "https://www.japtza.co.tz/img/carousel-1.jpg",
    },
    {
      img: "https://www.outlookindia.com/outlookmoney/public/uploads/article/gallery/74cf59a3b47090a860d701b4cd89ab2f.jpg",
    },
    {
      img: "https://navi.com/blog/wp-content/uploads/2022/02/home-loan-in-dharwad-1.jpg",
    },
  ];
  return (
    <>
      <div className="pt-4 relative opacity-60">
        <Carousel caruselImages={carouselImages} />
      </div>
      <div className="absolute flex flex-col justify-center w-full gap-4 py-20 pl-4 md:pl-8 lg:pl-12 pr-4 md:pr-8 lg:pr-12 top-28">
        <h1 className="flex self-center pt-5 text-xl font-bold text-center  sm:text-xl md:text-2xl lg:text-4xl">
          Home Loans
        </h1>
        <div className="text-xs text-center text-gray-900 font-sm md:text-md lg:text-xl ">
          Attractive interest rates to make your Home Loans affordable and
          easier on your pocket.
          <br />
          Customized repayment options to suit your needs.
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-2 border-2 border-green-600 text-white font-medium text-l rounded bg-green-600 hover:bg-green-700 hover:text-white transition-all ease-in-out duration-200"
            onClick={() => router.push("/contact")}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="p-4 md:p-14 lg:p-20">
        <h1 className="text-xl py-3 text-green-600">
          “Helping you make important decisions”
        </h1>
        <p className="text-gray-500">
          As a Home Loan Service Provider Team Bharat Parekh is dedicated to
          helping you to make the right decisions in choosing a home loan for
          purchasing your dream home, for what may be “the biggest financial
          decision of your life”.
        </p>
        <p className="py-3 text-gray-500">
          We are committed to provide best services to enable you to purchase or
          finance your property.
        </p>
        <p className="py-3 text-gray-500">
          We have the expertise in the field of Life Insurance, Housing Finance,
          Health insurance, Mutual Funds and Financial Services Industries with
          a focus on providing exceptional and delightful customer services.
        </p>
        <p className="py-3 text-gray-500">
          We believe that by assisting our clients to manage and structure their
          Insurance debt and Home equity, we can help them to reach financial
          goals sooner with better security.
        </p>
        <h1 className="text-2xl text-green-600 text-center font-bold">
          Our Services
        </h1>
        <div className="flex justify-between flex-wrap-reverse">
          <div>
            <div className="flex flex-wrap my-5 gap-10">
              <span className="text-white px-5 py-5 font-bold text-2xl border rounded-full bg-yellow-400 ">
                01
              </span>
              <h1 className="text-green-600 font-bold text-lg">
                Expert Dedicated team
              </h1>
            </div>
            <div className="flex flex-wrap my-5 gap-10">
              <span className="text-white px-5 py-5 font-bold text-2xl border rounded-full bg-black ">
                02
              </span>
              <h1 className="text-green-600 font-bold text-lg">
                Personalized Services
              </h1>
            </div>
            <div className="flex flex-wrap my-5 gap-10">
              <span className="text-white px-5 py-5 font-bold text-2xl border rounded-full bg-orange-400 ">
                03
              </span>
              <h1 className="text-green-600 font-bold text-lg">
                Services at your Doorstep
              </h1>
            </div>
            <div className="flex flex-wrap my-5 gap-10">
              <span className="text-white px-5 py-5 font-bold text-2xl border rounded-full bg-pink-400 ">
                04
              </span>
              <h1 className="text-green-600 font-bold text-lg">Legal Advice</h1>
            </div>
            <div className="flex flex-wrap my-5 gap-10">
              <span className="text-white px-5 py-5 font-bold text-2xl border rounded-full bg-rose-400 ">
                05
              </span>
              <h1 className="text-green-600 font-bold text-lg">Follow ups</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={homeImage} alt={"Home"} />
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-green-600 font-bold text-md">
            Searching for a Home Loan?
          </h1>
          <ul
            role="list"
            className="  marker:text-green-600 list-disc pl-5 space-y-3 text-slate-400"
          >
            <li>
              Your home is likely to be the most exciting and expensive purchase
              you make in your lifetime.
            </li>
            <li>
              {" "}
              You find the Home Loan in India that best suits your Financial
              Situation.
            </li>
            <li>Massive Application Fees</li>
            <li>High Interest Rates</li>
            <li>Hidden charges and processing fees.</li>
          </ul>
        </div>
        <div className="py-5">
          <h1 className="text-green-600 font-bold text-md ">
            Get the Right Home Loans.
          </h1>
          <p className="text-sm font-bold text-green-600">
            Your main considerations when looking for a home loan can be as
            follows:
          </p>
          <ul
            role="list"
            className="  marker:text-green-600 list-disc pl-5 space-y-3 text-slate-400"
          >
            <li>Simple Process & Documentation</li>
            <li>Low-interest rates and fees.</li>
            <li>No hidden charges, no surprises</li>
            <li>Fast approvals, disbursed on time.</li>
            <li>Fits with your current financial goals.</li>
            <li>Longer Term.</li>
          </ul>
        </div>
        <div>
          <h1 className="text-green-600 font-bold text-md ">
            Highest Loan Eligibility.
          </h1>
          <ul
            role="list"
            className="  marker:text-green-600 list-disc pl-5 space-y-3 text-slate-400"
          >
            <li>Flexible: you can make extra repayments..</li>
            <li>No Prepayments Penalty.</li>
          </ul>
          <div className="my-5">
            <h1 className="text-green-600 font-medium text-md">
              How We Help You to Get a Home Loan?
            </h1>
            <ul
              role="list"
              className="  marker:text-green-600 list-disc pl-5 space-y-3 text-slate-400"
            >
              <li>
                You tell us about the requirement of property as per your needs
                and we find a suitable solution for you from the lending
                products of all Bank/Financial Institutions.
              </li>
              <li>We assist/guide you for selection of the property.</li>

              <li>
                We provide you with information of a number of Financial
                Institutions so that you can analyze the company norms and
                rules.
              </li>
              <li>We provide services to meet customer satisfaction.</li>

              <li>
                We help in financial planning to free you from your financial
                problems.
              </li>
              <li>We provide services at your doorstep.</li>

              <li>Flexible: you can make extra repayments..</li>
              <li>
                The necessary information required is given in a simple language
                which will help you in taking the right decision..
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-green-600 font-medium text-md">
            How we help you to Refinance/Balance Transfer.
          </h1>
          <ul
            role="list"
            className="  marker:text-green-600 list-disc pl-5 space-y-3 text-slate-400"
          >
            <li>
              Balance Transferring can be done with various Financial
              Institutions.
            </li>
            <li>No prepayment penalty</li>
            <li>Disbursement in very short period.</li>
            <li>
              Provide all the information about Financial Institutions, to
              enable you to make comparison.
            </li>
            <li>Simple documentation and speedy processing.</li>
            <li>
              Helping you in transferring your loan to a lower interest rate and
              fees.
            </li>
            <li>Helping you to Top-Up loan over the existing Loan.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
