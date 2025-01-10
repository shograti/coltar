import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import styles from "./styles.module.css";

export function Post({ post }) {
  return (
    <>
      <Link href={`/poemes/${post.slug}`}>
        <h2 className={styles.title}>{post.title}</h2>
      </Link>
      <RichText className={styles.text_block} data={post.content} />
    </>
  );
}
