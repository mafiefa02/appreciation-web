import Head from "next/head";
import Button from "../components/Button";

import Router from "next/router";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | BPA FMIPA&apos;21 ITB</title>
        <meta
          name="description"
          content="Presented by Media Komunikasi dan Informasi BPA FMIPA'21 ITB"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-center items-center">
        <h1 className={"text-5xl font-bold text-background"}>HOME</h1>
      </div>
      <Button
        onClick={() =>
          Router.replace({
            pathname: "/login",
          })
        }
        textColor={"background"}
        content={"LOGIN"}
      />
    </>
  );
}
