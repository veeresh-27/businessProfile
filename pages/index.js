import Head from "next/head";
// import styles from '../styles/Home.module.css'
import { Header } from "../components/header";
import { Footer } from "../components/Footer";
//import Image from "next/image";
import mutual from "../public/img/mutual_fund.png";
import life from "../public/img/life-insurance.png";
import cal from "../public/img/premium_calculator.png";
//import { IconArrow } from "../public/icons/iconArrow";
import { Card } from "../components/card";
// import {Footer} from "../components/Footer";

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Mutual Funds",
      des: "Get future-ready by investing in mutual funds, a professionally managed investing program & fulfill your long term",
      image: mutual,
    },
    {
      id: 2,
      title: "Life Insurance",
      des: "Life a journey filled with uncertainties,so why not plan to counter those with confidence?",
      image: life,
    },
    {
      id: 3,
      title: "Health Insurance",
      des: "Get adequate property, accident coverage & travel insurance with plans that meets your requirements the best.",
      image: cal,
    },
  ];
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Header />
      <Head>
        <title>Financial Advisor</title>
        <meta
          name="description"
          content="Finance Management | House-Insurance Health-Insurance | Loans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center w-full h-full gap-4 pt-20 pl-4 md:pl-8 lg:pl-12 pr-4 md:pr-8 lg:pr-12">
        <h1 className="flex self-center pt-5 text-xl font-bold text-center sm:text-xl md:text-2xl lg:text-4xl">
          Experience Your Financial Journey Hassle-Free
        </h1>
        <div className="text-xs text-center text-gray-400 font-sm md:text-md lg:text-xl ">
          Financial Planning & Decisions For Life
          <br />
          Made Simple With Smart Technology
        </div>
      </div>
      <div className="border   bg-white-200  my-6 flex flex-col items-center justify-center text-center mb-22">
        <div>
          <h3 className="text-lg  font-medium my-5">
            {" "}
            Know more about our FINANCIAL SERVICES
          </h3>
          <h4 className="text-base text-gray-400 ">
            Choose from variety of investment options available. Pick the ones
            that suit your financial goal & requirements the best
          </h4>
        </div>
        <div className="flex justify-center gap-10  my-6 flex-wrap ">
          {cards.map(({ id, title, des, image }) => (
            <Card key={id} title={title} des={des} image={image} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
