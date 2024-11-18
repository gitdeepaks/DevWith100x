import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PageComments = () => {
  const [comments, setComments] = useState([]);
  const [post, setposts] = useState(null);
  const [loading, setLoading] = useState(false);

  const { postId } = useParams();

  const navigate = useNavigate();

  async function fetchData() {
    setLoading(true);

    try {
      const [postResponse, commentResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        ),
      ]);
      setposts(postResponse.data);
      setComments(commentResponse.data);
    } catch (error) {
      console.log("Error in fetching data", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [postId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {post && (
            <div className="post-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )}

          <h2>Comments</h2>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong> : {comment.body}
            </li>
          ))}
        </div>
      )}

      <button onClick={() => navigate(-1)} className="button">
        Go Back
      </button>
    </div>
  );
};

export default PageComments;
