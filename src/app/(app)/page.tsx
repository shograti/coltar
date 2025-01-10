import { RichTextRenderer } from "../components/rich-text-renderer/rich-text-renderer";
import { sortByMostRecent } from "../utils/get-most-recent";
import styles from "./page.module.css";
import { payload } from "@/lib/payload";

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
        <RichTextRenderer node={sortedPosts[0].content.root} />
      </div>
      <div className={styles.footer_posts}>
        <div>
          <h2>{sortedPosts[1].title}</h2>
          <RichTextRenderer node={sortedPosts[1].content.root} />
        </div>
        <div>
          <h2>{sortedPosts[2].title}</h2>
          <RichTextRenderer node={sortedPosts[2].content.root} />
        </div>
      </div>
    </div>
  );
}
