import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import UserProfile from "../../components/UserProfile";

import { prisma } from "../../db.ts";

const Dashboard = ({ posts }) => {
  const router = useRouter();
  console.log(router.query.user);

  const [user, setUser] = useState("");

  useEffect(() => {
    const { user } = router.query;
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [router]);

  const post = posts.find((post) => {
    return user.id === post.targetId;
  });
  console.log(post);

  if (post) {
    return (
      <Layout loggedIn>
        <Head>
          <title>
            {user.firstName} {user.lastName} | BPA FMIPA&apos;21 ITB
          </title>
          <meta
            name="description"
            content="Presented by Media Komunikasi dan Informasi BPA FMIPA'21 ITB"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <article className="prose dark:prose-invert prose-h1:uppercase prose-p:text-justify prose-p:leading-loose prose-p:text-background  prose-headings:text-primary-default prose-h1:text-primary-default xl:prose-lg sm:prose-sm prose-base lg:prose-lg prose-p:font-[500]">
          <UserProfile className={`w-[200px]`} user={user} />
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </Layout>
    );
  }

  return (
    <>
      <Layout loggedIn>
        <Head>
          <title>
            {user.firstName} {user.lastName} | BPA FMIPA&apos;21 ITB
          </title>
          <meta
            name="description"
            content="Presented by Media Komunikasi dan Informasi BPA FMIPA'21 ITB"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <article className="prose text-center dark:prose-invert prose-headings:uppercase prose-p:text-justify prose-p:leading-loose prose-p:text-background prose-headings:text-background xl:prose-lg sm:prose-sm prose-base lg:prose-lg">
          <h1>Tidak ada pesan untuk</h1>
          <UserProfile
            className={`w-[200px]`}
            user={user}
            position={"center"}
          />
        </article>
      </Layout>
    </>
  );
};

export default Dashboard;

export async function getStaticProps() {
  const posts = await prisma.post.findMany();

  for (const data of posts) {
    data.createdAt = data.createdAt.toString();
    data.updatedAt = data.updatedAt.toString();
  }

  return {
    props: {
      posts,
    },
  };
}
