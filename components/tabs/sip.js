import React from 'react'
export function Sip() {
  return (
    <>
      <div className=" my-5">
        <h1 className="text-xl text-green-600  font-bold">What Is SIP?</h1>
        <p className="text-sm py-2">
          A Systematic Investment Plan (SIP) is a mode of investment for mutual funds in which
          investors make regular, automated contributions periodically. With SIPs, you can plan your
          investments to achieve your financial goals over the long term. You can do this by
          determining the target amount and the amount you’d like to invest at periodic intervals in
          a mutual fund scheme you’ve chosen. For instance, say you’d like to invest ₹500 each month
          for five years. You can set up a SIP with a mutual fund and automate your contributions
          for the said period. You can also choose to contribute more or less frequently. Typically,
          SIP mutual funds allow investing weekly, monthly, quarterly, semi-annually and so on. It’s
          also important to understand the SIP meaning in mutual fund because it’s not an asset in
          itself, but only a mode of investing in mutual funds. Any contributions you make towards
          your SIP will be invested in a mutual fund scheme that you choose.
        </p>
        <h1 className="text-center  py-4 text-lg text-green-600  font-bold">Benefits Of SIP</h1>
        <div className="flex flex-wrap justify-center gap-4 my-5">
          <div className="border p-3 bg-sky-400 md:w-[48%]  rounded ">
            <div className="text-center">
              <h1>CONVENIENCE</h1>
              <p>
                Offering a hassle-free mode for investing ,the money is automatically debited from
                your registered account each month. Over time, the small contributions grow into a
                substantial amount because of compounding.
              </p>
            </div>
          </div>
          <div className="border p-3 md:w-[48%]  bg-red-400 rounded">
            <div className="text-center ">
              <h1>DISCIPLINED SAVING</h1>
              <p>
                A growth in income may trigger some to spend on upgrading their lifestyle. The wiser
                ones tend to do the reverse; they spend what’s left after investing. SIPs can help
                inculcate this discipline because you’re committing to investing a fixed amount each
                month. You don’t need to make an extra effort for monthly contributions either.
              </p>
            </div>
          </div>

          <div className="border md:w-[48%]  p-3  bg-green-500  rounded">
            <div className="text-center">
              <h1>FLEXIBILITY</h1>
              <p>
                With SIP, one can decide and increase/decrease the amount as they wish, although it
                is always recommended to continue SIP with a long-term perspective.
              </p>
            </div>
          </div>
          <div className="border md:w-[48%] p-3 bg-yellow-500 rounded">
            <div className="text-center">
              <h1>LONG TERM GAINS</h1>
              <p>
                The returns on your SIP investment, just like other mutual funds, benefit from
                compounding. To get some context on how powerful compounding can be, think of the
                returns in absolute terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-5">
        <h1 className="text-xl text-green-600 py-4 font-bold">Power Of Compounding</h1>
        {/*<div>*/}
        {/*  <Image src={currency} alt="" className="w-40" />*/}
        {/*</div>*/}
        <>
          <div>
            <div>What is Power Of Compounding ?</div>
            <>
              <div className="font-medium text-gray-400 md:h-full sm-h-90%">
                Time has the greatest influence on your investment portfolio than any other force.
                Investments have the potential to increase in value over time and hence longer the
                time frame the greater the value. That’s why, financial advisors always recommend to
                start saving early in order to gain benefits from the power of compounding. Let’s
                explore this concept further.
              </div>
              <div className=" flex flex-wrap my-3 gap-3 text-md   ">
                <div className=" border-2 md:w-[48%] px-2 py-4 rounded   bg-sky-400">
                  <p>
                    Compounding basically is long term investment strategy which means to re-invest
                    ones earnings from interest or dividend for receiving additional units
                  </p>
                </div>
                <div className=" border-2 md:w-[48%] px-2  py-4 rounded bg-purple-400">
                  The benefit from compounding comes primarily from the fact that income keeps
                  growing the principal to generate higher returns as time progresses
                </div>
                <div className=" border-2  px-2 py-4 md:w-[48%] rounded bg-red-400">
                  Higher rate of returns or longer investment duration plays a key role that leads
                  to increase in principal amount
                </div>
                <div className="border-2  px-2 py-4 md:w-[48%] rounded bg-yellow-400 ">
                  Hence, we can say that a successful investment planning is all about making the
                  most of compounding by getting time on one’s side. Hence the earlier you start
                  investing, the greater will be the power of compounding
                </div>
              </div>
            </>
          </div>
        </>
      </div>
    </>
  );
}
