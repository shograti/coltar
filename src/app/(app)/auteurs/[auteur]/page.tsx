import styles from "./styles.module.css";
import { notFound } from "next/navigation";
import { payload } from "@/lib/payload";
import { Post as PostType } from "payload-types";
import { Post } from "@/app/components/post/post";

interface PageParams {
  params: Promise<{
    auteur?: string;
  }>;
}

export default async function Page({ params: paramsPromise }: PageParams) {
  const { auteur: author } = await paramsPromise;

  const res = await payload.find({
    collection: "posts",
    draft: true,
    where: {
      author: {
        equals: author,
      },
    },
  });

  const posts = res?.docs as null | PostType[];

  console.log(posts);

  if (!posts) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  const postsRes = await payload.find({
    collection: "posts",
    draft: true,
    limit: 100,
  });

  const posts = postsRes?.docs;

  return posts.map(({ author }) =>
    author
      ? {
          author,
        }
      : {}
  );
}
