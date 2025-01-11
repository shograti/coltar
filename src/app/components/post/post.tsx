import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import styles from "./styles.module.css";
import { Post as PostType } from "payload-types";

export function Post({ post }: { post: PostType }) {
  return (
    <article className={styles.post}>
      <Link href={`/poemes/${post.slug}`}>
        <h2 className={styles.title}>{post.title}</h2>
      </Link>
      <RichText className={styles.text_block} data={post.content} />
      <p className={styles.authors}>
        Auteur : <Link href={`/auteurs/${post.author}`}> {post.author}</Link>
      </p>
    </article>
  );
}
