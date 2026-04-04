import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({post}) => {
  return (
    <article
      className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 mb-6"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {post.body.substring(0, 100)}
      </p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt