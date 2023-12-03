import Link from "next/link";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();

  const ids = posts?.map((post) => {
    return { id: post.id + "" };
  });
  //   console.log(ids);
  return ids;
};

const PostDetails = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params?.id}`);
  const post = await res.json();
  //   console.log(post);
  return (
    <div className="p-5">
      <h2>Details</h2>
      <div className="card w-[70vw] mx-auto bg-primary text-primary-content my-5">
        <div className="card-body">
          <h2 className="card-title">{post?.title}</h2>
          <p>{post?.post}</p>
          <p className="font-bold">{post?.likes}</p>
          <div className="card-actions justify-end">
            <Link href="/posts">
              <button className="btn">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
