import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Chat from "./pages/chats";
import Profile from "./pages/profile";
import NotFound from "./pages/not-found";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "*", element: <NotFound /> },
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
