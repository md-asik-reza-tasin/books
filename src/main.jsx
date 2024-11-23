import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import BookDetail from "./Components/BookDetail/BookDetail.jsx";
import ListedBook from "./Components/ListedBook/ListedBook.jsx";
import ChartOfBooks from "./Components/ChartOfBooks/ChartOfBooks.jsx";
import Signin from "./Components/Signin/Signin.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import AuthContext from "./Components/AuthContext/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "detailbook",
        element: (
          <PrivateRoute>
            <BookDetail></BookDetail>
          </PrivateRoute>
        ),
        loader: () => fetch("books.json"),
      },
      {
        path: "listbook",
        element: <ListedBook></ListedBook>,
      },
      {
        path: "pagesread",
        element: <ChartOfBooks></ChartOfBooks>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthContext>
  </StrictMode>
);
