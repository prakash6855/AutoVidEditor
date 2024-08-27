import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import VideoPlayer from "./components/VideoPlayer";
import Home from "./components/Home";
import Prompt from "./components/Prompt";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/VideoPlayer",
    element: <VideoPlayer />,
  },
  {
    path: "/Prompt",
    element: <Prompt />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
