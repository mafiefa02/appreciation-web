import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <style jsx global>{`
        ${"body {background: #ffffff}"}
      `}</style>
    </>
  );
}

export default MyApp;
