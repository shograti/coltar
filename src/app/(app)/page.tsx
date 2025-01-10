import { sortByMostRecent } from "../utils/get-most-recent";
import styles from "./page.module.css";
import { payload } from "@/lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";


export default async function Home() {
  const { docs: posts } = await payload.find({
    collection: "posts",
    limit: 3,
  });

  const sortedPosts = sortByMostRecent(posts);

  return (
    <div className={styles.container}>
      <div className={styles.latest_post}>
        <h2>{sortedPosts[0].title}</h2>
        <RichText data={sortedPosts[0].content} />
      </div>
      <div className={styles.footer_posts}>
        <div>
          <h2>{sortedPosts[1].title}</h2>
          <RichText data={sortedPosts[1].content} />
        </div>
        <div>
          <h2>{sortedPosts[2].title}</h2>
          <RichText data={sortedPosts[2].content} />
        </div>
      </div>
    </div>
  );
}
