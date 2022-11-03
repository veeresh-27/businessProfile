import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import {Header} from "../components/header";
import {Footer} from "../components/Footer";
import Image from "next/image";
import mutual from "../public/img/mutual_fund.png";
import  life from "../public/img/life-insurance.png";
import cal from "../public/img/premium_calculator.png";
import {IconArrow} from "../public/icons/iconArrow";
// import {Footer} from "../components/Footer";

export default function Home() {
  return (
    <div className='flex flex-col overflow-x-hidden'>
        <Header/>
      <Head>
        <title>Financial Advisor</title>
        <meta name="description" content="Finance Management | House-Insurance Health-Insurance | Loans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="flex flex-col justify-center w-full h-full gap-4 pt-20 pl-4 md:pl-8 lg:pl-12 pr-4 md:pr-8 lg:pr-12">
          <h1 className="flex self-center pt-5 text-xl font-bold text-center sm:text-xl md:text-2xl lg:text-4xl">
              Experience Your Financial Journey Hassle-Free
          </h1>
            <div className="text-xs text-center text-gray-400 font-sm md:text-md lg:text-xl ">
                Financial Planning & Decisions For Life
                <br/>
                Made Simple With Smart Technology
            </div>

        </div>
        <div className="border   bg-white-200  my-6 flex flex-col items-center justify-center text-center mb-22">

<div>
    <h3 className="text-lg  font-medium my-5"> Know more about our FINANCIAL SERVICES</h3>
    <h4 className="text-base text-gray-400 ">Choose from variety of investment options available.
        Pick the ones that suit your financial goal & requirements the best</h4>
</div>

            <div className="flex justify-center space-x-10  my-6 ">
                <div className="rounded-lg shadow-lg bg-white max-w-xs">
                    <a href="#">
                        <Image className="rounded-md" src={mutual}
                             alt=""/>
                    </a>
                    <div className="p-4">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Mutual Funds</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Get future-ready by investing in mutual funds, a professionally managed investing program & fulfill your long term
                        </p>
                        <button type="button"
                                className="flex px-6 py-2 border-2 border-green-400 text-green-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Read More <IconArrow />
                        </button>
                    </div>



                </div>
                <div className="flex justify-center ">
                    <div className="rounded-lg shadow-lg bg-white max-w-xs">
                        <a href="#">
                            <Image className="rounded-md" src= {life}
                                 alt=""/>
                        </a>
                        <div className="p-4">
                            <h5 className="text-gray-900 text-xl font-medium mb-2 ">Life Insurance</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Life a journey filled with uncertainties,so why not plan to counter those with confidence? </p>
                            <button type="button"
                                    className="flex my-9 px-6  py-2 border-2 border-green-400 text-green-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Read More <IconArrow />
                            </button>

                        </div>
                    </div>

                    </div>
                <div className="flex justify-center ">
                    <div className="rounded-lg shadow-lg bg-white max-w-xs">
                        <a href="#">
                            <Image className="rounded-md" src={cal}
                                 alt=""/>
                        </a>
                        <div className="p-4">
                            <h5 className="text-gray-900 text-xl font-medium mb-2 ">Premium Calculator</h5>
                            <p className="text-gray-700 text-base mb-4">
                                Get adequate property, accident coverage & travel insurance with plans that meets your requirements the best.
                            </p>
                            <button type="button"
                                    className="flex my-8 px-6 py-2 border-2 border-green-400 text-green-400 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Read More <IconArrow />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <Footer/>
    </div>



  )
}
