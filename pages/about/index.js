import Image from "next/image";
import about from "../../public/img/about.png";
export default function About() {
  return (
    <>
      <h1 className="text-2xl text-green-600 text-center font-bold">
        About us{" "}
      </h1>

      <div className="border-2 px-20 ">
        <h1 className="text-xl font-medium text-gray-600">Who we are </h1>
        <div className="grid ">
          {" "}
          <p className="font-base text-md text-gray-400">
            TRANSPARENT OFFERINGS FOR TRUSTED RELATIONSHIPS
          </p>
          <h3 className="font-bold text-md ">The Financial World</h3>
          <p>
            We are Fincart - your partners in transforming your financial life
            by following a simple philosophy of Educating, Empowering, &
            Enabling you through a set of uncomplicated financial offerings. No
            jargons. No complex schemes. No heavy statements.
          </p>
          <p>
            It’s Finance Simplified. Our solution-based approach help you plan,
            invest, and prosper with a definite goal in mind with best resources
            and an experienced team at work.
          </p>
          <div>
            {" "}
            <Image
              src={about}
              className="max-w-md    h-auto bg-slate-400 rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
