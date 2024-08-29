import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import VideoPlayer from "./components/VideoPlayer";
import Home from "./components/Home";
import Prompt from "./components/Prompt";
import Gaming from "./components/Gaming";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Prompt />,
  },
  {
    path: "/VideoPlayer",
    element: <VideoPlayer />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Gaming",
    element: <Gaming />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
