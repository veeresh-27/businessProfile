import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import {Header} from "../components/header";
// import {Footer} from "../components/Footer";
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
          <h1 className="flex self-center pt-20 text-xl font-bold text-center sm:text-xl md:text-2xl lg:text-4xl">
              Experience Your Financial Journey Hassle-Free
          </h1>
            <div className="text-xs text-center text-gray-400 font-sm md:text-md lg:text-xl ">
                Financial Planning & Decisions For Life
                <br/>
                Made Simple With Smart Technology
            </div>

        </div>
        <div>

        </div>
        {/*<Footer/>*/}
    </div>
  )
}
