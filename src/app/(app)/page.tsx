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
      {sortedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
