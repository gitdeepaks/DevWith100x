import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // https://jsonplaceholder.typicode.com/posts?_limit=50

  const { data: posts } = useLoaderData();

  // const fetchPosts = async () => {
  //   setloading(true);
  //   try {
  //     const resposnse = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts?_limit=50"
  //     );
  //     setposts(resposnse.data);
  //   } catch (error) {
  //     console.log(error, "Error while fething");
  //   }
  //   setloading(false);
  // };
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

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
  const resposnse = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=50"
  );

  return resposnse;
}

export default PostList;
