import Head from "next/head";
import mutual from "../public/img/mutual_fund.png";
import life from "../public/img/life-insurance.png";
import cal from "../public/img/premium_calculator.png";
import home from "../public/img/homeloan.jpg";
import { Card } from "../components/card";
import Carousel from "../components/carousel";
//import Slider from "react-slick";
//import Image from "next/image";

export default function Home() {
  //TODO Spam prevention and security measures to avoid overwhelming with emails

  // const settings = {
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 1500,
  //   infinite: true,
  //   speed: 500,
  //   arrows: false,
  //   slidesToShow: 1,
  //   //fade: true,
  //   slidesToScroll: 1,
  // };
  const cards = [
    {
      id: 1,
      title: "Mutual Funds",
      des: "Get future-ready by investing in mutual funds, a professionally managed investing program & fulfill your long term",
      image: mutual,
      link: "/mutualfunds",
    },
    {
      id: 2,
      title: "Life Insurance",
      des: "Life a journey filled with uncertainties,so why not plan to counter those with confidence?",
      image: life,
      link: "/insurance",
    },
    {
      id: 3,
      title: "Health Insurance",
      des: "Get adequate property, accident coverage & travel insurance with plans that meets your requirements the best.",
      image: cal,
      link: "/insurance",
    },
    {
      id: 4,
      title: "Home Loans",
      des: "Get adequate property, accident coverage & travel insurance with plans that meets your requirements the best.",
      image: home,
      link: "/homeloans",
    },
  ];

  const carouselImages = [
    {
      img: "https://www.mashreqbank.com/-/jssmedia/Images/UAE/Personal/Products/insurance/iStock-1208672734.ashx?h=1840&iar=0&w=2759&hash=53713C441FB13639A5A9E14376CB3D55",
      alt: "Carousel-img",
    },
    {
      img: "https://www.indusind.com/iblogs/wp-content/uploads/saving-acount.jpg",
      alt: "Carousel-img",
    },
    {
      img: "https://www.righthorizons.com/wp-content/uploads/2022/06/Investing-globally-options-for-Indian-residents.jpg",
      alt: "Carousel-img",
    },
  ];
  return (
    <div className="flex flex-col">
      <Head>
        <title>Financial Advisor</title>
        <meta
          name="description"
          content="Finance Management | House-Insurance Health-Insurance | Loans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-4 relative opacity-60">
        <Carousel caruselImages={carouselImages} />
      </div>
      <div className="absolute flex flex-col justify-center w-full gap-4 py-20 pl-4 md:pl-8 lg:pl-12 pr-4 md:pr-8 lg:pr-12 top-28">
        <h1 className="flex self-center pt-5 text-xl font-bold text-center  sm:text-xl md:text-2xl lg:text-4xl">
          Experience Your Financial Journey Hassle-Free
        </h1>
        <div className="text-xs text-center text-gray-900 font-sm md:text-md lg:text-xl ">
          Financial Planning & Decisions For Life
          <br />
          Made Simple With Smart Technology
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-2 border-2 border-green-600 text-white font-medium text-l rounded bg-green-600 hover:bg-green-700 hover:text-white transition-all ease-in-out duration-200"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="border   bg-white-200  my-6 flex flex-col items-center justify-center text-center mb-22">
        <div>
          <h3 className="text-2xl text-green-600  font-medium my-5">
            {" "}
            Know more about our FINANCIAL SERVICES
          </h3>
          <h4 className="text-base text-gray-400 ">
            Choose from variety of investment options available. Pick the ones
            that suit your financial goal & requirements the best
          </h4>
        </div>
        <div className="flex justify-center gap-10  my-6 flex-wrap ">
          {cards.map(({ id, title, des, image, link }) => (
            <Card key={id} title={title} des={des} image={image} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
