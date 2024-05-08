import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Chat from "./pages/chats";
import Profile from "./pages/profile";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
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
