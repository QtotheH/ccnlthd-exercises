const PostCard = ({post}) => {
    return (
        <article>
            <h4>{post.title}</h4>
            <p className="postCredit">
                <span>Views: {post.views}</span>
            </p>
            <p>{post.body}</p>
        </article>
    )
}
export default PostCard
