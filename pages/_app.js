import "../styles/globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
