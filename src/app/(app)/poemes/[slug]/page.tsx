import { notFound } from "next/navigation";
import { payload } from "@/lib/payload";
import { Post as PostType } from "payload-types";
import { Post } from "@/app/components/post/post";

interface PageParams {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function Page({ params: paramsPromise }: PageParams) {
  const { slug } = await paramsPromise;

  const res = await payload.find({
    collection: "posts",
    draft: true,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const post = res?.docs?.[0] as null | PostType;

  if (!post) {
    return notFound();
  }

  return <Post post={post} />;
}

export async function generateStaticParams() {
  const postsRes = await payload.find({
    collection: "posts",
    draft: true,
    limit: 100,
  });

  const posts = postsRes?.docs;

  return posts.map(({ slug }) =>
    slug
      ? {
          slug,
        }
      : {}
  );
}
