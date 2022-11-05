import Image from "next/image";
import typesOfMmutualFund from "../../public/img/mf.jpg";
import { MutualFundCard } from "../../components/mutualfundCard";
// import { Card } from "../../components/card";

export default function MutualFunds() {
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
      desc: "Since every mutual fund is managed & regulated by SEBI, you need not worry as your investments are safe. SEBI has several regulations & legal frameworks in place which ensures that your investments are managed in a disciplined manner. Now it's true that every investment is subject to certain risks, however, prudent selection based on strong market knowledge &  fundamentally sound securities with diversification can help hedge such risks and generate high returns on your investments",
    },
  ];
  return (
    <>
      <h1 className="text-2xl text-green-600 text-center font-bold">
        Know Mutual Fund
      </h1>
      <div>
        <p className=" text-md font-bold text-gray-500 my-9  px-20">
          {" "}
          <span className="text-xl text-green-600 ">Mutual Funds</span> offer a
          way for a group of investors to effectively pool their money so they
          can invest in a wider variety of investment vehicles and take
          advantage of professional money management through the purchase of one
          mutual fund share. Mutual fund companies essentially collect the money
          from their investors, or shareholders, and invest that pooled money
          into individual investment vehicles according to some risk profile,
          money management philosophy, or financial goal. The mutual fund then
          passes along the profits (and losses) of those investments to its
          shareholders.
        </p>
        <p className=" text-md font-base text-gray-600 mx-20 py-30">
          More & more people are learning about mutual funds as a means of
          investment. From putting ones money into fixed deposits or investing
          in real estate, people are becoming aware of mutual funds as lucrative
          choice of savings & investments. It is becoming the most sought-after
          method of investing but having limited or no knowledge of it can
          hamper ones plan to go ahead with mutual funds completely. Here, we
          will give you a summarized info about all you need to know about
          mutual funds & the benefits it carries.
        </p>
      </div>
      <div className="border px-20 my-5   ">
        <h1 className="text-xl text-green-600  my-4 font-bold ">
          Why To Invest In Mutual Funds?
        </h1>
        <h3 className="text-lg">
          Lets glance at why should one consider investing in mutual funds over
          other options to achieve their financial goals:
        </h3>
        <div className="flex  my-5 gap-10 flex-wrap justify-center">
          {mf.map(({ id, title, desc }) => (
            <MutualFundCard key={id} title={title} desc={desc} />
          ))}
        </div>
      </div>
      <div className="border px-20 my-5   ">
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
            categorized based on the size of the companies like large, medium or
            small.
          </p>
          <h1 className="text-md text-green-600  my-4 font-bold">Debt Funds</h1>
          <p className="text-md font-base text-gray-600 ">
            These funds are known as safe investments and provide fixed returns.
            In these, funds are invested in debt instruments like company bonds,
            government bonds, fixed income assets.
          </p>
          <h1 className="text-md text-green-600  my-4 font-bold">
            Money Market Funds
          </h1>
          <p className="text-md font-base text-gray-600">
            A money market mutual fund is a kind of mutual fund that invests in
            ultra-safe or low-risk securities. The purpose of the fund is to
            conserve the capital of the fund and it is unusual to see the NAV of
            a money market mutual fund go below one. The NAV can go below one if
            the securities do badly but it is quite rare to happen.
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

          <h1 className="text-md text-green-600  my-4 font-bold">Bond Funds</h1>
          <p className="text-md font-base text-gray-600">
            A bond mutual fund invests in debt instruments issued by governments
            and/or corporations. Most of these funds are designed to provide
            interest income for shareholders in the form of dividends that
            represent the total interest payments made by all bonds in the funds
            portfolio.
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
            40% fixed income. A similar type of fund known as “Asset Allocation
            Fund” follows on similar objectives that of Balanced Funds but then
            these kinds of funds do not hold any specified percentage of any
            asset class.
          </p>
        </div>
      </div>

      <div className=" px-20 my-5   ">
        <h1 className="text-xl text-green-600  font-bold">What Is SIP?</h1>
        <p className="text-sm py-2">
          Systematic Investment Plan (SIP) is a very easy & convenient mode of
          making investments in mutual funds on a regular basis. SIP allows one
          to cultivate a habit of savings & creating wealth for the future by
          starting early. Offering ease & flexibility, through SIP one can
          create a planned approach towards investing right. SIP gets
          auto-debited from the investors account and the amount is invested
          into a mutual fund scheme that has been specified. The investor then
          gets a certain number of units which is based on the current ongoing
          market rate. Every-time a SIP is made, additional units keep getting
          added to the investor’s account. SIP has proved to be an ideal choice
          of investments for retail investors who lack resources to pursue
          active investments.
        </p>
        <h1 className="text-center py-4 text-lg text-green-600  font-bold">
          Benefits Of SIP
        </h1>
        <div className="grid grid-cols-2 ">
          <div className=" box-border p-3 mx-3 bg-sky-400  rounded">
            <div className="text-center">
              <h1>CONVENIENCE</h1>
              <p>
                Offering a hassle-free mode for investing, one can directly get
                the SIP amount deducted from ones bank account via a standing
                instruction to facilitate auto-debit function.
              </p>
            </div>
          </div>
          <div className="box-border   p-3  mx-3 bg-red-400 rounded">
            <div className="text-center">
              <h1>DISCIPLINED SAVING</h1>
              <p>
                By investing through SIP, you commit to saving regularly. So,
                with SIP, one gets into a mode of disciplined savings along with
                creating a path of attaining one’s financial objectives & goal.
              </p>
            </div>
          </div>

          <div className="box-border    p-3  mx-3 my-3 bg-green-500 rounded">
            <div className="text-center">
              <h1>FLEXIBILITY</h1>
              <p>
                With SIP, one can decide and increase/decrease the amount as
                they wish, although it is always recommended to continue SIP
                with a long-term perspective.
              </p>
            </div>
          </div>
          <div className="box-border    p-3 my-3 mx-3 bg-yellow-500  rounded">
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
  );
}
