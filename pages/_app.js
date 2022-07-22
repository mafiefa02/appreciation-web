import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        ${"body {background: #121212}"}
      `}</style>
    </>
  );
}

export default MyApp;
