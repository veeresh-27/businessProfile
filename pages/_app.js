import "../styles/globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/Footer";
import { FloatingActionButton } from "../components/floatingActionButton";
import { useState, useEffect } from "react";
import Router from "next/router";
import loader from "../public/gif/loader.gif";
import Image from "next/image";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);
  return (
    <>
      {loading ? (
        <p className="h-screen flex justify-center items-center">
          <Image src={loader} alt="loader" />
        </p>
      ) : (
        <>
          {" "}
          <Header />
          {router.pathname !== "/contact" ? (
            <>
              <FloatingActionButton />
              <Component {...pageProps} />
            </>
          ) : (
            <>
              <Component {...pageProps} />
            </>
          )}
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
