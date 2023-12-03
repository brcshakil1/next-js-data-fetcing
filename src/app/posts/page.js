import Link from "next/link";
import styles from "./Posts.module.css";

const page = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div className="p-5">
      <h2 className={styles.header_text}>Total posts: {posts?.length}</h2>
      <div className="">
        {posts?.map((post) => (
          <div
            key={post.title}
            className="card w-[70vw] mx-auto bg-primary text-primary-content my-5"
          >
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>
              <p>{post?.post}</p>
              <p className="font-bold">{post?.likes}</p>
              <div className="card-actions justify-end">
                <Link href={`/posts/${post.id}`}>
                  <button className="btn">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
