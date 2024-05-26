import ReactDOM from "react-dom/client";
import "./style/style.css";
import AppRouter from "./AppRouter";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./services/store";
import { AuthProvider } from "./context/authContext";
// import reportWebVitals from "./reportWebVitals.js";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </AuthProvider>
);
// reportWebVitals(console.log);
