import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constant/theme.js";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AnimeDetail from "./pages/anime_detail/AnimeDetail.jsx";
import { RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export const myRoute = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: myRoute,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/detail/:id",
    element: (
      <>
   
        <AnimeDetail />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
