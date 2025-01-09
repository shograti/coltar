import { notFound } from "next/navigation";
import React, { Fragment } from "react";
import { payload } from "@/lib/payload";
import { Post } from "payload-types";

interface PageParams {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function Page({ params: paramsPromise }: PageParams) {
  const { slug } = await paramsPromise;


  const postRes = await payload.find({
    collection: "posts",
    draft: true,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const post = postRes?.docs?.[0] as null | Post;

  if (!post) {
    return notFound();
  }

  return (
    <Fragment>
      <main>
        <h1>{post.title}</h1>
      </main>
    </Fragment>
  );
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
