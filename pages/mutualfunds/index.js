import Image from "next/image";
import { useState } from "react";
import topImage from "../../public/img/mutual-fund.webp";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
import typesOfMmutualFund from "../../public/img/mf.jpg";
import { MutualFundCard } from "../../components/mutualfundCard";
import dollor from "../../public/img/dollor.jpg";
import currency from "../../public/img/currency.png";
// import VerticalTabs from "../../components/verticalTab";
// import { Card } from "../../components/card";

const mf = [
  {
    id: 1,
    title: "Professional Managers",
    desc: [
      "Mutual funds are managed by professional people who have years of experience handling different types of assets. They are a group of dedicated team that handles all financial decisions based on the performance & prospects available in the market.",
    ],
  },
  {
    id: 2,
    title: "Offers Convenience",
    desc: "If saving time & convenience is what you seek then mutual funds are an ideal choice for investment. Because of low investment amount options, multiple choices based on one's life & financial goals, offering the ability to redeem them on any business day, mutual funds are much sought after.",
  },
  {
    id: 3,
    title: "Diversification",
    desc: "Mutual funds help counter risks to a large extent by equally distributing your investments across diverse range of asset classes. Mutual funds work by the adage “Do Not Put All Your Eggs in One Basket”.",
  },
  {
    id: 4,
    title: "Counter Inflation",
    desc: "Investing in mutual fund is a smart way of beating inflation as it helps investors to generate inflation-adjusted returns, without spending much time or energy on it. This choice of investing makes sure that the purchasing power of your money doesn't go downhill over some years.",
  },
  {
    id: 5,
    title: "Less Expensive",
    desc: "As compared to investing directly in capital market, mutual funds offer investors the advantage of low cost investment. Most stock options require a huge capital to begin with, on the other hand mutual funds can be started with as low as Rs.500 per month & investors can derive benefit from the long-term equity investment.",
  },
  {
    id: 6,
    title: "Safe & Transparent",
    desc: "Since every mutual fund is managed & regulated by SEBI, you need not worry as your investments are safe. SEBI has several regulations & legal frameworks in place which ensures that your investments are managed in a disciplined manner and generate high returns on your investments.",
  },
];

export default function MutualFunds() {
  const [activeTab, setActiveTab] = useState(0);
  //const [open, setOpen] = useState(0);

  // const handleOpen = (value) => {
  //   setOpen(open === value ? 0 : value);
  // };
  const tabs = [
    {
      name: "Mutual Funds",
    },
    {
      name: "SIP",
    },
  ];
  return (
    <div className="px-4 md:px-14 lg:px-24">
      {/*<h1 className="text-2xl text-green-600 text-center font-bold">*/}
      {/*  Know Mutual Fund*/}
      {/*</h1>*/}
      <div className="flex font-medium justify-center md:justify-start pt-5 gap-8">
        {tabs?.map(({ name }, index) => (
          <>
            <div
              className={`cursor-pointer  border-b-4 rounded text-gray-600 transition-all ease-in-out duration-500 ${
                activeTab === index
                  ? "border-green-600 scale-110 text-black "
                  : null
              }`}
              key={index}
              onClick={() => setActiveTab(index)}
            >
              {name}
            </div>
          </>
        ))}
      </div>
      {activeTab === 0 ? (
        <>
          <div>
            <div className="flex gap-4 items-center flex-col-reverse md:flex-row pt-10 md:pt-0">
              <div className="flex md:basis-3/5 md:pr-6">
                <p className=" text-md font-bold text-gray-500 mb-4 py-4  ">
                  {" "}
                  <span className="text-xl text-green-600 ">
                    Mutual Funds
                  </span>{" "}
                  is an investment vehicle that pools funds from investors and
                  invests in equities, bonds, government securities, gold, and
                  other assets. Companies that qualify to set up mutual funds,
                  create Asset Management Companies (AMCs) or Fund Houses, which
                  pool in the money from investors, market mutual funds, manage
                  investments and enable investor transactions. Mutual funds are
                  managed by sound financial professionals known as fund
                  managers, who have the expertise in analysing and managing
                  investments. The funds collected from investors in mutual
                  funds are invested by the fund managers in different financial
                  assets such as stocks, bonds, and other assets, as defined by
                  the fund’s investment objective. Where and when to invest are
                  some of the things taken care of by the fund managers, amongst
                  many other responsibilities.
                </p>
              </div>
              <div className="flex  w-[400px]">
                <Image src={topImage} alt={""} />
              </div>{" "}
            </div>

            <div className="flex">
              <div className="">
                <p className="text-md font-base text-gray-600 ">
                  For the fund management, the AMC charges a fee to the investor
                  known as the expense ratio. It is not a fixed fee and varies
                  from one mutual fund to another. SEBI has defined the maximum
                  limit of the expense ratio that can be charged on the basis of
                  the total assets of the fund. In India, the capital markets
                  regulator SEBI (Securities and Exchange Board of India) has
                  encouraged the mutual fund industry by creating a system that
                  works for the benefit of all stakeholders, including investors
                  and mutual fund sponsors. Regulations are passed from time to
                  time which improves functioning and help attract investments
                  and generate growth.
                </p>
              </div>
            </div>
          </div>
          <div className="my-5   ">
            <h1 className="text-xl text-green-600  my-4 font-bold ">
              Why To Invest In Mutual Funds?
            </h1>
            <h3 className="text-lg">
              Lets glance at why should one consider investing in mutual funds
              over other options to achieve their financial goals:
            </h3>
            <div className="flex my-5 gap-5 flex-wrap justify-center">
              {mf.map(({ id, title, desc }) => (
                <MutualFundCard key={id} title={title} desc={desc} />
              ))}
            </div>
          </div>
          <div className=" my-5   ">
            <h1 className="text-xl text-green-600  my-4 font-bold">
              Types Of Mutual Funds
            </h1>
            <div className="flex align-center justify-center">
              <Image src={typesOfMmutualFund} alt={"ufhwe"} />
            </div>

            <div className="flex flex-col gap-4 ">
              <div>
                {" "}
                <h1 className="text-md text-green-600  font-bold">
                  1. Equity Funds
                </h1>
                <p className="text-md font-base text-gray-600">
                  These are type of funds that primarily invest in stocks and
                  main investment objective of this class of funds is long term
                  capital growth. Further, there are many types of equity funds
                  which are categorized based on the size of the companies like
                  large, medium or small.
                </p>
              </div>
              <div>
                {" "}
                <h1 className="text-md text-green-600   font-bold">
                  2. Debt Funds
                </h1>
                <p className="text-md font-base text-gray-600 ">
                  These funds are known as safe investments and provide fixed
                  returns. In these, funds are invested in debt instruments like
                  company bonds, government bonds, fixed income assets.
                </p>
              </div>
              <div>
                {" "}
                <h1 className="text-md text-green-600   font-bold">
                  3. Money Market Funds
                </h1>
                <p className="text-md font-base text-gray-600">
                  A money market mutual fund is a kind of mutual fund that
                  invests in ultra-safe or low-risk securities. The purpose of
                  the fund is to conserve the capital of the fund and it is
                  unusual to see the NAV of a money market mutual fund go below
                  one. The NAV can go below one if the securities do badly but
                  it is quite rare to happen.
                </p>
              </div>
              <div>
                <h1 className="text-md text-green-600   font-bold">
                  4. Income Funds
                </h1>
                <p className="text-md font-base text-gray-600">
                  Income Funds mainly focus on generating regular income for the
                  investors by investing in high dividend generating stocks,
                  government securities, certificate of deposits, corporate
                  bonds, money market Instruments, and debentures.
                </p>
              </div>
              <div>
                {" "}
                <h1 className="text-md text-green-600  font-bold">
                  5. International Funds
                </h1>
                <p className="text-md font-base text-gray-600">
                  The international fund usually refers to an investment or
                  mutual fund composed of international bonds and foreign
                  company stocks.
                </p>
              </div>

              <div>
                <h1 className="text-md text-green-600  font-bold">
                  6. Bond Funds
                </h1>
                <p className="text-md font-base text-gray-600">
                  A bond mutual fund invests in debt instruments issued by
                  governments and/or corporations. Most of these funds are
                  designed to provide interest income for shareholders in the
                  form of dividends that represent the total interest payments
                  made by all bonds in the funds portfolio.
                </p>
              </div>

              <div>
                {" "}
                <h1 className="text-md text-green-600  font-bold">
                  7. Dividend Fund
                </h1>
                <p className="text-md font-base text-gray-600">
                  This type of mutual funds invests in stock of companies that
                  pay dividends, which are profits that a company shares with
                  its stakeholders. These are income generating funds & tend to
                  be less risky than other types of funds. It is a good choice
                  of investment for those who seek regular payments over
                  appreciation.
                </p>
              </div>
              <div>
                {" "}
                <h1 className="text-md text-green-600 font-bold">
                  8. Balanced Funds
                </h1>
                <p className="text-md font-base text-gray-600">
                  The strategy used by these funds are to maintain a certain
                  percentage of mix of both fixed income & equities. Normally, a
                  typical balanced fund will maintain a distribution of 60%
                  equity & 40% fixed income. A similar type of fund known as
                  “Asset Allocation Fund” follows on similar objectives that of
                  Balanced Funds but then these kinds of funds do not hold any
                  specified percentage of any asset class.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className=" my-5">
            <h1 className="text-xl text-green-600  font-bold">What Is SIP?</h1>
            <p className="text-sm py-2">
              A Systematic Investment Plan (SIP) is a mode of investment for
              mutual funds in which investors make regular, automated
              contributions periodically. With SIPs, you can plan your
              investments to achieve your financial goals over the long term.
              You can do this by determining the target amount and the amount
              you’d like to invest at periodic intervals in a mutual fund scheme
              you’ve chosen. For instance, say you’d like to invest ₹500 each
              month for five years. You can set up a SIP with a mutual fund and
              automate your contributions for the said period. You can also
              choose to contribute more or less frequently. Typically, SIP
              mutual funds allow investing weekly, monthly, quarterly,
              semi-annually and so on. It’s also important to understand the SIP
              meaning in mutual fund because it’s not an asset in itself, but
              only a mode of investing in mutual funds. Any contributions you
              make towards your SIP will be invested in a mutual fund scheme
              that you choose.
            </p>
            <h1 className="text-center  py-4 text-lg text-green-600  font-bold">
              Benefits Of SIP
            </h1>
            <div className="flex flex-wrap justify-center gap-4 my-5">
              <div className="border p-3 bg-sky-400 md:w-[48%]  rounded ">
                <div className="text-center  ">
                  <h1>CONVENIENCE</h1>
                  <p>
                    Offering a hassle-free mode for investing ,the money is
                    automatically debited from your registered account each
                    month. Over time, the small contributions grow into a
                    substantial amount because of compounding.
                  </p>
                </div>
              </div>
              <div className="border p-3 md:w-[48%]  bg-red-400 rounded">
                <div className="text-center ">
                  <h1>DISCIPLINED SAVING</h1>
                  <p>
                    A growth in income may trigger some to spend on upgrading
                    their lifestyle. The wiser ones tend to do the reverse; they
                    spend what’s left after investing. SIPs can help inculcate
                    this discipline because you’re committing to investing a
                    fixed amount each month. You don’t need to make an extra
                    effort for monthly contributions either.
                  </p>
                </div>
              </div>

              <div className="border md:w-[48%]  p-3  bg-green-500  rounded">
                <div className="text-center">
                  <h1>FLEXIBILITY</h1>
                  <p>
                    With SIP, one can decide and increase/decrease the amount as
                    they wish, although it is always recommended to continue SIP
                    with a long-term perspective.
                  </p>
                </div>
              </div>
              <div className="border md:w-[48%] p-3 bg-yellow-500 rounded">
                <div className="text-center">
                  <h1>LONG TERM GAINS</h1>
                  <p>
                    The returns on your SIP investment, just like other mutual
                    funds, benefit from compounding. To get some context on how
                    powerful compounding can be, think of the returns in
                    absolute terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-5">
            <h1 className="text-xl text-green-600 py-4 font-bold">
              Power Of Compounding
            </h1>
            {/*<div>*/}
            {/*  <Image src={currency} alt="" className="w-40" />*/}
            {/*</div>*/}
            <>
              <div>
                <div>What is Power Of Compounding ?</div>
                <>
                  <div className="font-medium text-gray-400 md:h-full sm-h-90%">
                    Time has the greatest influence on your investment portfolio
                    than any other force. Investments have the potential to
                    increase in value over time and hence longer the time frame
                    the greater the value. That’s why, financial advisors always
                    recommend to start saving early in order to gain benefits
                    from the power of compounding. Let’s explore this concept
                    further.
                  </div>
                  <div className=" flex flex-wrap my-3 gap-3 text-md   ">
                    <div className=" border-2 md:w-[48%] px-2 py-4 rounded   bg-sky-400">
                      <p>
                        Compounding basically is long term investment strategy
                        which means to re-invest ones earnings from interest or
                        dividend for receiving additional units
                      </p>
                    </div>
                    <div className=" border-2 md:w-[48%] px-2  py-4 rounded bg-purple-400">
                      The benefit from compounding comes primarily from the fact
                      that income keeps growing the principal to generate higher
                      returns as time progresses
                    </div>
                    <div className=" border-2  px-2 py-4 md:w-[48%] rounded bg-red-400">
                      Higher rate of returns or longer investment duration plays
                      a key role that leads to increase in principal amount
                    </div>
                    <div className="border-2  px-2 py-4 md:w-[48%] rounded bg-yellow-400 ">
                      Hence, we can say that a successful investment planning is
                      all about making the most of compounding by getting time
                      on one’s side. Hence the earlier you start investing, the
                      greater will be the power of compounding
                    </div>
                  </div>
                </>
              </div>
            </>
          </div>
        </>
      )}

      {/*TODO
        div className="flex p-4">
          <VerticalTabs displayTabs={tabs} />
        </div>*/}
    </div>
  );
}

/*
 const tabs = [
    {
      name: "why",
      label: "Why",
      comp: (
        <div className=" my-5   ">
          <h1 className="text-xl text-green-600  my-4 font-bold ">
            Why To Invest In Mutual Funds?
          </h1>
          <h3 className="text-lg">
            Lets glance at why should one consider investing in mutual funds
            over other options to achieve their financial goals:
          </h3>
          <div className="flex  my-5 gap-10 flex-wrap justify-center">
            {mf.map(({ id, title, desc }) => (
              <MutualFundCard key={id} title={title} desc={desc} />
            ))}
          </div>
        </div>
      ),
    },
    {
      name: "types",
      label: "Types",
      comp: (
        <div className="">
          <h1 className="text-xl text-green-600  my-4 font-bold">
            Types Of Mutual Funds
          </h1>
          <div className="flex align-center justify-center">
            <Image src={typesOfMmutualFund} alt={"ufhwe"} />
          </div>

          <div>
            <h1 className="text-md text-green-600  my-4 font-bold">
              Equity Funds
            </h1>
            <p className="text-md font-base text-gray-600">
              These are type of funds that primarily invest in stocks and main
              investment objective of this class of funds is long term capital
              growth. Further, there are many types of equity funds which are
              categorized based on the size of the companies like large, medium
              or small.
            </p>
            <h1 className="text-md text-green-600  my-4 font-bold">
              Debt Funds
            </h1>
            <p className="text-md font-base text-gray-600 ">
              These funds are known as safe investments and provide fixed
              returns. In these, funds are invested in debt instruments like
              company bonds, government bonds, fixed income assets.
            </p>
            <h1 className="text-md text-green-600  my-4 font-bold">
              Money Market Funds
            </h1>
            <p className="text-md font-base text-gray-600">
              A money market mutual fund is a kind of mutual fund that invests
              in ultra-safe or low-risk securities. The purpose of the fund is
              to conserve the capital of the fund and it is unusual to see the
              NAV of a money market mutual fund go below one. The NAV can go
              below one if the securities do badly but it is quite rare to
              happen.
            </p>
            <h1 className="text-md text-green-600  my-4 font-bold">
              Income Funds
            </h1>
            <p className="text-md font-base text-gray-600">
              Income Funds mainly focus on generating regular income for the
              investors by investing in high dividend generating stocks,
              government securities, certificate of deposits, corporate bonds,
              money market Instruments, and debentures.
            </p>
            <h1 className="text-md text-green-600  my-4 font-bold">
              International Funds
            </h1>
            <p className="text-md font-base text-gray-600">
              The international fund usually refers to an investment or mutual
              fund composed of international bonds and foreign company stocks.
            </p>

            <h1 className="text-md text-green-600  my-4 font-bold">
              Bond Funds
            </h1>
            <p className="text-md font-base text-gray-600">
              A bond mutual fund invests in debt instruments issued by
              governments and/or corporations. Most of these funds are designed
              to provide interest income for shareholders in the form of
              dividends that represent the total interest payments made by all
              bonds in the funds portfolio.
            </p>

            <h1 className="text-md text-green-600  my-4 font-bold">
              Dividend Fund
            </h1>
            <p className="text-md font-base text-gray-600">
              This type of mutual funds invests in stock of companies that pay
              dividends, which are profits that a company shares with its
              stakeholders. These are income generating funds & tend to be less
              risky than other types of funds. It is a good choice of investment
              for those who seek regular payments over appreciation.
            </p>
            <h1 className="text-md text-green-600  my-4 font-bold">
              Balanced Funds
            </h1>
            <p className="text-md font-base text-gray-600">
              The strategy used by these funds are to maintain a certain
              percentage of mix of both fixed income & equities. Normally, a
              typical balanced fund will maintain a distribution of 60% equity &
              40% fixed income. A similar type of fund known as “Asset
              Allocation Fund” follows on similar objectives that of Balanced
              Funds but then these kinds of funds do not hold any specified
              percentage of any asset class.
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "sip",
      label: "SIP",
      comp: (
        <>
          <div className=" my-5   ">
            <h1 className="text-xl text-green-600  font-bold">What Is SIP?</h1>
            <p className="text-sm py-2">
              Systematic Investment Plan (SIP) is a very easy & convenient mode
              of making investments in mutual funds on a regular basis. SIP
              allows one to cultivate a habit of savings & creating wealth for
              the future by starting early. Offering ease & flexibility, through
              SIP one can create a planned approach towards investing right. SIP
              gets auto-debited from the investors account and the amount is
              invested into a mutual fund scheme that has been specified. The
              investor then gets a certain number of units which is based on the
              current ongoing market rate. Every-time a SIP is made, additional
              units keep getting added to the investor’s account. SIP has proved
              to be an ideal choice of investments for retail investors who lack
              resources to pursue active investments.
            </p>
            <h1 className="text-center  py-4 text-lg text-green-600  font-bold">
              Benefits Of SIP
            </h1>
            <div className="flex-wrap align-center justify-center  my-5 gap-4  item-center  ">
              <div className=" box-border p-3 mx-3 bg-sky-400  rounded ">
                <div className="text-center  ">
                  <h1>CONVENIENCE</h1>
                  <p>
                    Offering a hassle-free mode for investing, one can directly
                    get the SIP amount deducted from ones bank account via a
                    standing instruction to facilitate auto-debit function.
                  </p>
                </div>
              </div>
              <div className="box-border  mt-4 p-3 mx-3 bg-red-400 rounded">
                <div className="text-center ">
                  <h1>DISCIPLINED SAVING</h1>
                  <p>
                    By investing through SIP, you commit to saving regularly.
                    So, with SIP, one gets into a mode of disciplined savings
                    along with creating a path of attaining one’s financial
                    objectives & goal.
                  </p>
                </div>
              </div>

              <div className="box-border mt-4  p-3 mx-3 bg-green-500  rounded">
                <div className="text-center">
                  <h1>FLEXIBILITY</h1>
                  <p>
                    With SIP, one can decide and increase/decrease the amount as
                    they wish, although it is always recommended to continue SIP
                    with a long-term perspective.
                  </p>
                </div>
              </div>
              <div className="box-border  mt-4  p-3 mx-3 bg-yellow-500    rounded">
                <div className="text-center">
                  <h1>LONG TERM GAINS</h1>
                  <p>
                    Investing with SIPs leads to long term gains because of the
                    power of compounding & rupee cost averaging. Rupee cost
                    averaging is an automated market timing technique that
                    eliminates ones need to time the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-5   ">
            <h1 className="text-xl text-green-600  font-bold">What Is SIP?</h1>
            <p className="text-sm py-2">
              Systematic Investment Plan (SIP) is a very easy & convenient mode
              of making investments in mutual funds on a regular basis. SIP
              allows one to cultivate a habit of savings & creating wealth for
              the future by starting early. Offering ease & flexibility, through
              SIP one can create a planned approach towards investing right. SIP
              gets auto-debited from the investors account and the amount is
              invested into a mutual fund scheme that has been specified. The
              investor then gets a certain number of units which is based on the
              current ongoing market rate. Every-time a SIP is made, additional
              units keep getting added to the investor’s account. SIP has proved
              to be an ideal choice of investments for retail investors who lack
              resources to pursue active investments.
            </p>
            <h1 className="text-center  py-4 text-lg text-green-600  font-bold">
              Benefits Of SIP
            </h1>
            <div className="flex-wrap align-center justify-center  my-5 gap-4  item-center  ">
              <div className=" box-border p-3 mx-3 bg-sky-400  rounded ">
                <div className="text-center  ">
                  <h1>CONVENIENCE</h1>
                  <p>
                    Offering a hassle-free mode for investing, one can directly
                    get the SIP amount deducted from ones bank account via a
                    standing instruction to facilitate auto-debit function.
                  </p>
                </div>
              </div>
              <div className="box-border  mt-4 p-3 mx-3 bg-red-400 rounded">
                <div className="text-center ">
                  <h1>DISCIPLINED SAVING</h1>
                  <p>
                    By investing through SIP, you commit to saving regularly.
                    So, with SIP, one gets into a mode of disciplined savings
                    along with creating a path of attaining one’s financial
                    objectives & goal.
                  </p>
                </div>
              </div>

              <div className="box-border mt-4  p-3 mx-3 bg-green-500  rounded">
                <div className="text-center">
                  <h1>FLEXIBILITY</h1>
                  <p>
                    With SIP, one can decide and increase/decrease the amount as
                    they wish, although it is always recommended to continue SIP
                    with a long-term perspective.
                  </p>
                </div>
              </div>
              <div className="box-border  mt-4  p-3 mx-3 bg-yellow-500    rounded">
                <div className="text-center">
                  <h1>LONG TERM GAINS</h1>
                  <p>
                    Investing with SIPs leads to long term gains because of the
                    power of compounding & rupee cost averaging. Rupee cost
                    averaging is an automated market timing technique that
                    eliminates ones need to time the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      name: "benefitsSip",
      label: "Benefits Of SIP",
      comp: (
        <div className="my-5   ">
          <h1 className="text-xl text-green-600  font-bold">
            Power Of Compounding
          </h1>
          <Fragment>
            <Accordion open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                What is Power Of Compounding ?
              </AccordionHeader>
              <AccordionBody>
                <div className="font-medium text-gray-500 dark:text-gray-400 md:h-full sm-h-90%">
                  Time has the greatest influence on your investment portfolio
                  than any other force. Investments have the potential to
                  increase in value over time and hence longer the time frame
                  the greater the value. That’s why, financial advisors always
                  recommend to start saving early in order to gain benefits from
                  the power of compounding. Let’s explore this concept further.
                </div>
                <div className=" px-20 my-3 grid grid-cols-2 gap-3 md:h-full  text-md font-bold text-white ">
                  <div className="border-2 px-2 py-4 w-50 rounded   bg-sky-400">
                    <p>
                      Compounding basically is long term investment strategy
                      which means to re-invest ones earnings from interest or
                      dividend for receiving additional units
                    </p>
                  </div>
                  <div className="border-2  px-2  py-4 w-50 rounded bg-purple-400">
                    The benefit from compounding comes primarily from the fact
                    that income keeps growing the principal to generate higher
                    returns as time progresses
                  </div>
                  <div className="border-2  px-2 py-4 w-50 rounded bg-red-400">
                    Higher rate of returns or longer investment duration plays a
                    key role that leads to increase in principal amount
                  </div>
                  <div className="border-2  px-2 py-4 w-50  rounded bg-yellow-400">
                    Hence, we can say that a successful investment planning is
                    all about making the most of compounding by getting time on
                    one’s side. Hence the earlier you start investing, the
                    greater will be the power of compounding
                  </div>
                </div>
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
      ),
    },
  ];
* */
