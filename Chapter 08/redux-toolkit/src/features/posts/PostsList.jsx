import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPost = posts.map((post) => (
    <article
      key={post.id}
      className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 mb-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {post.content.substring(0, 100)}
      </p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Posts
      </h2>

      <div className="space-y-4">{renderedPost}</div>
    </section>
  );
};

export default PostsList;
