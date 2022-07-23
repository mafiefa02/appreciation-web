import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { prisma } from "../../db.ts";

export default function Dashboard({ posts }) {
  const router = useRouter();
  console.log(router.query.user);

  const [user, setUser] = useState({});

  useEffect(() => {
    const { user } = router.query;
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [router]);

  const checkPost = (post) => {
    return user.id === post.targetId;
  };

  const post = posts.find(checkPost);
  console.log(post);

  if (post) {
    return (
      <>
        <h1>{`Hello ${user.firstName}`}</h1>
        <h1>{`Post title ${post.postTitle}`}</h1>
      </>
    );
  }

  return (
    <>
      <h1>{`Tidak ada post untuk ${user.firstName}`}</h1>
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
