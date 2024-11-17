import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PostCard = ({ post }) => {
  return (
    <div
      style={{
        height: 150,
        border: "1px solid #ccc",
        marginBottom: "10px",
      }}
    >
      {/* // eslint-disable-next-line react/prop-types */}
      <h2 className="text-wrap">{post.title}</h2>
      <p className="text-wrap">{post.body}</p>

      <Link to={`/posts/${post.id}`}>View Comment</Link>
    </div>
  );
};

export default PostCard;
