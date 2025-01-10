import styles from "./page.module.css";
import { payload } from "@/lib/payload";
import { Post } from "../components/post/post";

export default async function Home() {
  const { docs: posts } = await payload.find({
    collection: "posts",
    limit: 3,
  });


  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
