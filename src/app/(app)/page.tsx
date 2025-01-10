import styles from "./page.module.css";
import { sortByMostRecent } from "../utils/get-most-recent";
import { payload } from "@/lib/payload";
import { Post } from "../components/post/post";

export default async function Home() {
  const { docs: posts } = await payload.find({
    collection: "posts",
    limit: 3,
  });

  const sortedPosts = sortByMostRecent(posts);

  return (
    <div className={styles.container}>
      <div className={styles.latest_post}>
        <Post post={sortedPosts[0]} />
      </div>
      <div className={styles.footer_posts}>
        <div>
          <Post post={sortedPosts[1]} />
          <div>
            <Post post={sortedPosts[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}
