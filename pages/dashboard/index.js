// pass data dari login ke router query, terus pass lagi ke sini atau bisa pakai
// session atau local storage.
import { useRouter } from "next/router";
import { prisma } from "../../db.ts";

export default function Dashboard({ posts }) {
  const router = useRouter();
  const user = JSON.parse(router.query.userLoggedIn);

  const checkPost = (post) => {
    if (user.id === post.targetId) {
      return post;
    }
  };

  const post = posts.find(checkPost);

  return (
    <>
      <h1>{`Hello, ${user.firstName} ${user.lastName}`}</h1>
      <p>{`post title: ${post.postTitle}`}</p>
      <p>{`post content: ${post.content}`}</p>
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
