import "./App.css";
import { useFetch } from "./hooks/use-fetch";

const App = () => {
  // https://jsonplaceholder.typicode.com/posts

  const { data, loaging, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (error) {
    return <div className="">Error : {error.message}</div>;
  }

  if (loaging) {
    <div className="">Loading.....</div>;
  }

  return (
    <div className="content">
      Data:{" "}
      {data && (
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>
              {post.title}
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
