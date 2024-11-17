import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PostComments, { postLoader } from "./pages/PostComments";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/posts", element: <Post />, loader: postLoader },
      { path: "/posts/:postId", element: <PostComments /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
