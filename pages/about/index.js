//import Image from "next/image";
//import about from "../../public/img/about.png";
import Head from "next/head";
import { IconPhone } from "../../public/icons/iconsPhone";
import { IconsMail } from "../../public/icons/iconsMail";
//import finplan from "../../public/img/financial-planning.webp";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <div className="py-20 padding flex flex-col justify-center">
      <Head>
        <title>About Ishwar Patil</title>
        <meta
          name="description"
          content="Financial Advisor |Finance Management | House-Insurance Health-Insurance | Loans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-lg text-green-600  font-bold pb-4">
        Financial Planning is an important aspect of the individual as well as
        business life.
      </div>
      <div className="border-4 p-4 rounded">
        <h1 className="text-xl font-medium text-gray-600">Ishwar Patil </h1>
        <div className="grid ">
          {" "}
          <p className="font-base text-md text-gray-400">
            Financial Advisor<br/>
            IRDA Certified | AMFI Reg MFD
            
          </p>
          <p>Trusted by thousands of customers.</p>
          <h3 className=" ">Get in touch</h3>
          <div>
            <p className="flex gap-2 pt-2">
              <IconPhone /> +91 8660446535
            </p>
            <p
              onClick={() => router.push("mailto:licishwarptil@gmail.com")}
              className="flex gap-2 pt-2 cursor-pointer"
            >
              <IconsMail /> finance.ishwarpatil@gmail.com
            </p>
            <p className="flex gap-2 pt-2 items-center">
              Start your finance planning right now!{" "}
              <button
                type="button"
                className="px-4 py-1 border-2 border-green-600 text-white font-medium text-sm rounded bg-green-600 hover:bg-green-700 hover:text-white transition-all ease-in-out duration-200"
                onClick={() => router.push("/contact")}
              >
                Get Started
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h1 className="text-xl text-green-600  font-bold">What We Do</h1>
        <p>
          We believe financial freedom is an easily attainable dream if there’s
          a proper plan and vision in place. We believe that your hard earned
          money, if managed properly, can build a financially stable and
          worry-free future for you. To help you achieve that stability, we
          build a customised financial plan for upcoming golden years of your
          life. We offer the best retirement plans to maintain financial
          well-being of those who are nearing or living their retirement life.
          We assist golden agers in taking well-informed financial decisions so
          that they live a financially independent and worry-free life that they
          dreamt of.
        </p>
      </div>
      {/*<Image src={finplan} alt={"finplan"} />*/}
    </div>
  );
}
