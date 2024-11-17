import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PostCard from "../components/PostCard";
import { useLoaderData } from "react-router-dom";

const PostComments = () => {
  const { data: posts } = useLoaderData();
  // https://jsonplaceholder.typicode.com/posts?_limit=50

  //   const [posts, setposts] = useState([]);
  //   const [loading, setloading] = useState(false);

  //   const fetchPosts = async () => {
  //     setloading(true);

  //     try {
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts?_limit=50"
  //       );

  //       //   console.log(response.data);
  //       setposts(response.data);
  //     } catch (error) {
  //       console.log("error in fetching", error);
  //     }
  //     setloading(false);
  //   };

  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export async function postLoader() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=50"
  );

  return response;
}

export default PostComments;
