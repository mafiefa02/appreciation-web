import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { prisma } from "../../db.ts";

export default function Dashboard({ posts }) {
  const postsData = posts;
  const router = useRouter();
  console.log(router.query.user);

  const [user, setUser] = useState({});

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
      <article className="prose dark:prose-invert prose-h1:uppercase prose-p:text-justify prose-p:leading-loose prose-p:text-background  prose-headings:text-primary-default prose-h1:text-primary-default xl:prose-lg sm:prose-sm prose-base lg:prose-lg prose-p:font-[500]">
        <h1>Pesan dari MBP</h1>
        <h4>
          untuk {user.firstName} {user.lastName}
        </h4>
        <p>{post.content}</p>
      </article>
    );
  }

  return (
    <>
      <article className="prose text-center dark:prose-invert prose-headings:uppercase prose-p:text-justify prose-p:leading-loose prose-p:text-background prose-headings:text-background xl:prose-lg sm:prose-sm prose-base lg:prose-lg">
        <h1>Tidak ada pesan untuk</h1>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
      </article>
    </>
  );
}

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
