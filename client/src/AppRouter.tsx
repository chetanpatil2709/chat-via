import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Chat from "./pages/chats";
import Profile from "./pages/profile";
import React from "react";
import Auth from "./pages/auth";
// import NotFound from "./pages/not-found";
const isAuthenticated = true;

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  return isAuthenticated ? (
    <React.Fragment>{element}</React.Fragment>
  ) : (
    <React.Fragment>
      <Auth />
    </React.Fragment>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<AppLayout />} />,
    children: [
      // { path: "/*", element: <NotFound /> },
      {
        index: true,
        element: <Chat />,
      },
      {
        path: "/:type",
        element: <Chat />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default AppRouter;
