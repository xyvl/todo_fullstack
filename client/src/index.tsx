import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./routes/Main/Main";
import "./styles/main_styles.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Auth from "./routes/Auth/Auth";
import Regist from "./routes/Regist/Regist"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "regist",
    element: <Regist/>
  }
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
