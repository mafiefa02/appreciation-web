import Head from "next/head";
import Form from "../components/Form";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | BPA FMIPA'21 ITB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-center items-center">
        <h1 className={"text-5xl font-bold"}>HOME</h1>
      </div>
      <Button
        onClick={() => true}
        className={"bg-neutral-800 hover:bg-neutral-700"}
        link={"/login"}
        content={"LOGIN"}
      />
    </>
  );
}
